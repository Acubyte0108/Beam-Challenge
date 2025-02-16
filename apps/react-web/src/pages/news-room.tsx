import { useState, useEffect } from "react";
import axios from "axios";
import {
  BlogCard,
  BlogCardSkeleton,
} from "@workspace/ui/components/beam-components/blog-card";
import { BeamButton } from "@workspace/ui/components/beam-components/button";
import { Container } from "@workspace/ui/components/customs/container";
import { HeroBanner } from "@workspace/ui/components/customs/hero-banner";
import PlaceholderImage from "@workspace/ui/assets/placeholder.png";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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

function NewsRoom({ scrollPosition }: { scrollPosition?: any }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

  useEffect(() => {
    fetchPosts(1);
  }, []);

  const fetchPosts = async (pageNum: number) => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const res = await axios.get<ApiResponse>(
        `${API_URL}/api/posts?page=${pageNum}&limit=6`
      );
      setPosts((prev) => [...prev, ...res.data.data]);
      setHasMore(res.data.hasMore);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-4 min-h-svh bg-[#F6F8FA]">
      <HeroBanner className="bg-gradient-to-r from-blue-600 to-purple-400 text-white">
        <h2>News room</h2>
      </HeroBanner>

      <Container>
        <section className="md:py-12 pt-2 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {!loading && posts.length === 0 && (
              <div className="col-span-3 text-center text-gray-500 text-lg">
                No news available at the moment. Please try again later.
              </div>
            )}

            {posts.map((post) => (
              <BlogCard
                key={`news-${post.id}`}
                imageComponent={
                  <LazyLoadImage
                    src={post.image || PlaceholderImage}
                    alt={post.title || "Placeholder Image"}
                    effect="blur"
                    width="100%"
                    height="100%"
                    className="rounded-t-xl w-full h-full object-cover"
                    scrollPosition={scrollPosition}
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
                onClick={() => fetchPosts(page)}
                size="lg"
                className="md:w-1/3 w-full md:text-lg text-md"
                disabled={loading}
              >
                {loading ? "Loading..." : "See more"}
              </BeamButton>
            </div>
          )}
        </section>
      </Container>
    </div>
  );
}

export default trackWindowScroll(NewsRoom);
