"use client";

import { useState } from "react";
import {
  BlogCard,
  BlogCardSkeleton,
} from "@workspace/ui/components/beam-components/blog-card";
import { BeamButton } from "@workspace/ui/components/beam-components/button";
import PlaceholderImage from "@workspace/ui/assets/placeholder.png";
import { Post, PostsApiResponse } from "@/app/api/posts/route";
import Image from "next/image";

export const NewsSection = ({ initialPosts }: { initialPosts: Post[] }) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts || []);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const API_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

  const fetchPosts = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/posts?page=${page}&limit=6`);
      if (!res.ok) throw new Error("Failed to fetch posts");

      const data: PostsApiResponse = await res.json();

      setPosts((prev) => [...prev, ...data.data]);

      setHasMore(data.hasMore);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="md:py-12 pt-2 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.length === 0 && !loading && (
          <div className="col-span-3 text-center text-gray-500 text-lg">
            No news available at the moment. Please try again later.
          </div>
        )}

        {posts.map((post) => (
          <BlogCard
            key={`news-${post.id}`}
            imageComponent={
              <Image
                src={post.image?.trim() ? post.image : PlaceholderImage}
                alt={post.title || "Placeholder Image"}
                width={490}
                height={320}
                className="rounded-t-xl w-full h-full object-cover"
              />
            }
            title={post.title}
            description={post.description}
          />
        ))}

        {loading &&
          [...Array(6)].map((_, i) => (
            <BlogCardSkeleton key={`news-skeleton-${i}`} />
          ))}
      </div>

      {hasMore && posts.length > 0 && (
        <div className="flex justify-center mt-12">
          <BeamButton
            onClick={fetchPosts}
            size="lg"
            className="md:w-1/3 w-full md:text-lg text-md"
            disabled={loading}
          >
            {loading ? "Loading..." : "See more"}
          </BeamButton>
        </div>
      )}
    </section>
  );
};
