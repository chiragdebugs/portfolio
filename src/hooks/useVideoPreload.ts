"use client";

import { useState, useEffect } from "react";

export function useVideoPreload(urls: string[]) {
  const [videoSources, setVideoSources] = useState<string[]>(urls);

  useEffect(() => {
    let mounted = true;
    const blobUrls: string[] = [];

    const preloadVideos = async () => {
      const loadedSources = await Promise.all(
        urls.map(async (url) => {
          try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Network response failed");
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            blobUrls.push(objectUrl);
            return objectUrl;
          } catch {
            return url;
          }
        })
      );

      if (mounted) {
        setVideoSources(loadedSources);
      }
    };

    preloadVideos();

    return () => {
      mounted = false;
      blobUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [urls]);

  return videoSources;
}
