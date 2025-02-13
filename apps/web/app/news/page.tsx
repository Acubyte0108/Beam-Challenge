import { Container } from "@workspace/ui/components/customs/container";
import { NewsSection } from "@/components/news-section";

export default function NewsRoom() {
  return (
    <div className="flex flex-col items-center gap-y-4 min-h-full">
      <div className="w-full bg-gradient-to-r from-blue-600 to-purple-400 flex items-center justify-center text-white text-2xl font-semibold h-48 md:h-64 lg:h-80">
        News room
      </div>

      <Container>
        <NewsSection />
      </Container>
    </div>
  );
}