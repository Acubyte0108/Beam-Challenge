import { Container } from "@workspace/ui/components/customs/container";
import { NewsSection } from "@/components/news-section";

export default function NewsRoom() {
  return (
    <div className="flex flex-col items-center gap-y-4 min-h-svh bg-[#F6F8FA]">
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-400 flex items-center justify-center text-white text-4xl font-semibold h-48 md:h-64 lg:h-80">
        <h2>News room</h2>
      </div>
      <Container>
        <NewsSection />
      </Container>
    </div>
  );
}