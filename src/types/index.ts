export interface Repository {
  name: string;
  description: string | null;
  language: string;
  topics: string[];
  stars: number;
  updated_at: string;
  html_url: string;
  homepage?: string | null;
  image?: string | null;
}
