import { Container } from "@workspace/ui/components/customs/container";
import { HeroBanner } from "@workspace/ui/components/customs/hero-banner";
import { NewsSection } from "@/components/news-section";
import { Post } from "@/app/api/posts/route";

const getInitialPosts = async (): Promise<Post[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts?page=1&limit=6`
    );

    if (!res.ok) throw new Error(`Failed to fetch news. Status: ${res.status}`);

    const data = await res.json();
    return data.data ?? [];
  } catch (error) {
    console.error("Error fetching initial posts:", error);
    return [];
  }
};

export default async function NewsRoom() {
  const initialPosts = await getInitialPosts();

  return (
    <div className="flex flex-col items-center gap-y-4 min-h-svh bg-[#F6F8FA]">
      <HeroBanner className="bg-gradient-to-r from-blue-600 to-purple-400 text-white">
        <h2>News room</h2>
      </HeroBanner>

      <Container>
        <NewsSection initialPosts={initialPosts} />
      </Container>
    </div>
  );
}
