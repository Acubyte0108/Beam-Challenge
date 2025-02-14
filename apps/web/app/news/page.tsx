import { Container } from "@workspace/ui/components/customs/container";
import { NewsSection } from "@/components/news-section";
import { Post } from "@/app/api/posts/route";

const getInitialPosts = async (): Promise<Post[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts?page=1&limit=6`,
    { next: { revalidate: 900 } }
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json().then((data) => data.data);
};

export default async function NewsRoom() {
  const initialPosts = await getInitialPosts();

  return (
    <div className="flex flex-col items-center gap-y-4 min-h-svh bg-[#F6F8FA]">
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-400 flex items-center justify-center text-white text-4xl font-semibold h-48 md:h-64 lg:h-80">
        <h2>News room</h2>
      </div>

      <Container>
        <NewsSection initialPosts={initialPosts} />
      </Container>
    </div>
  );
}