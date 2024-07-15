import { useState, useEffect } from "react";
import { PostType } from "../types/feed";

export const useFeed = () => {
  const [feed, setFeed] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/feed");
      if (!response.ok) {
        throw new Error("Failed to fetch feed");
      }
      const feedItems = await response.json();
      setFeed(feedItems);
    } catch (error) {
      console.error("Error fetching feed:", error);
    } finally {
      setLoading(false);
    }
  };

  return { feed, loading, fetchFeed };
};
