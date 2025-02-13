"use client";

import { useState, useEffect } from "react";
import { Button } from "@workspace/ui/components/button";
import { BlogCard } from "@workspace/ui/components/beam-components/blog-card";
import PlaceholderImage from "@workspace/ui/assets/placeholder.png";
import Image from "next/image";

type Post = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type ApiResponse = {
  page: number;
  limit: number;
  hasMore: boolean;
  data: Post[];
};

export const NewsSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Fetch Posts from API
  const fetchPosts = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts?page=${page}&limit=6`
      );
      if (!res.ok) throw new Error("Failed to fetch posts");

      const data: ApiResponse = await res.json();

      // ✅ Prevent duplicate entries by filtering out existing post IDs
      setPosts((prev) => {
        const existingIds = new Set(prev.map((post) => post.id));
        const newPosts = data.data.filter((post) => !existingIds.has(post.id));
        return [...prev, ...newPosts]; // Append only unique posts
      });

      setHasMore(data.hasMore);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Initial Fetch
  useEffect(() => {
    fetchPosts();
  }, []); // Runs only on mount

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-center text-2xl font-bold mb-8">News Room</h2>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={`news-${post.id}`}
            imageComponent={
              post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={490}
                  height={320}
                  className="rounded-t-xl w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={PlaceholderImage}
                  alt="placeholder"
                  width={490}
                  height={320}
                  className="rounded-t-xl w-full h-full object-cover"
                />
              )
            }
            title={post.title}
            description={post.description}
          />
        ))}
      </div>

      {/* See More Button - Only Show if `hasMore` is true */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={fetchPosts}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
          >
            {loading ? "Loading..." : "See more"}
          </Button>
        </div>
      )}
    </section>
  );
};
