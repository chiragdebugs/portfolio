import { Repository } from "@/types";

const TARGET_REPOS = [
  "repolens-ai",
  "billbuddy-ai",
  "AI-DevOps-Log-Analyzer",
  "shadow-spending-detector",
  "fraudguard-ai",
  "AI-Voice-Assistant",
  "File-Organizer",
];

// Helper to fetch and parse README for image and description
async function getReadmeData(username: string, repo: string): Promise<{ image: string | null; description: string | null }> {
  try {
    const res = await fetch(`https://raw.githubusercontent.com/${username}/${repo}/main/README.md`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      // Try master branch if main fails
      const resMaster = await fetch(`https://raw.githubusercontent.com/${username}/${repo}/master/README.md`, {
        next: { revalidate: 3600 },
      });
      if (!resMaster.ok) return { image: null, description: null };
      
      const text = await resMaster.text();
      return parseReadme(text);
    }

    const text = await res.text();
    return parseReadme(text);
  } catch {
    return { image: null, description: null };
  }
}

function parseReadme(markdown: string) {
  // Extract first image url using markdown ![alt](url) or HTML <img src="url">
  let image: string | null = null;
  
  const mdImgMatches = Array.from(markdown.matchAll(/!\[.*?\]\((.*?)\)/g));
  for (const match of mdImgMatches) {
    if (!match[1].includes('shields.io') && !match[1].includes('badge')) {
      image = match[1];
      break;
    }
  }

  if (!image) {
    const htmlImgMatches = Array.from(markdown.matchAll(/<img.*?src="(.*?)".*?>/g));
    for (const match of htmlImgMatches) {
      if (!match[1].includes('shields.io') && !match[1].includes('badge')) {
        image = match[1];
        break;
      }
    }
  }

  // Extract first proper paragraph as description
  let description: string | null = null;
  const lines = markdown.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip empty lines, headers, badges, images, html tags, and lists
    if (trimmed && 
        !trimmed.startsWith('#') && 
        !trimmed.startsWith('[') && 
        !trimmed.startsWith('!') && 
        !trimmed.startsWith('<') &&
        !trimmed.startsWith('-') &&
        !trimmed.startsWith('*')) {
      description = trimmed;
      break;
    }
  }

  return { image, description };
}

export async function getRepositories(): Promise<Repository[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/chiragdebugs/repos?per_page=100&sort=updated",
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch repositories");
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const repos: any[] = await res.json();

    const selectedRepos = repos
      .filter((repo) => TARGET_REPOS.includes(repo.name) && !repo.fork)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language || "Markdown",
        topics: repo.topics || [],
        stars: repo.stargazers_count || 0,
        updated_at: repo.updated_at,
        html_url: repo.html_url,
        homepage: repo.homepage,
      }));

    // Fetch README data in parallel for the selected repos
    const reposWithReadme = await Promise.all(
      selectedRepos.map(async (repo) => {
        const readmeData = await getReadmeData("chiragdebugs", repo.name);
        return {
          ...repo,
          image: readmeData.image,
          // Use README description if GitHub description is null or too short (< 20 chars)
          description: (!repo.description || repo.description.length < 20) && readmeData.description 
            ? readmeData.description 
            : repo.description,
        };
      })
    );

    // Sort to maintain the defined priority order
    return reposWithReadme.sort((a, b) => {
      const indexA = TARGET_REPOS.indexOf(a.name);
      const indexB = TARGET_REPOS.indexOf(b.name);
      return indexA - indexB;
    });
  } catch (error) {
    console.error("Error fetching github repos:", error);
    return [];
  }
}
