import { Container } from "@workspace/ui/components/customs/container";
import { Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@workspace/ui/components/carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel1 from "@workspace/ui/assets/carousel-1.jpg";
import Carousel2 from "@workspace/ui/assets/carousel-2.jpg";
import Carousel3 from "@workspace/ui/assets/carousel-3.jpg";
import Carousel4 from "@workspace/ui/assets/carousel-4.jpg";
import Carousel5 from "@workspace/ui/assets/carousel-5.jpg";
import Autoplay from "embla-carousel-autoplay";

const carouselImages = [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-4 min-h-svh">
      <div className="py-4 w-full bg-gradient-to-r from-[#DC2424] to-[#4A569D]">
        <Container>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 7000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {carouselImages.map((image, i) => (
                <CarouselItem
                  key={`carousel-item-${i + 1}`}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <LazyLoadImage
                    src={image}
                    alt={`Slide ${i + 1}`}
                    className="object-cover rounded-xl h-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-md:hidden" />
            <CarouselNext className="max-md:hidden" />
          </Carousel>
        </Container>
      </div>

      <Container className="flex-1 items-center mt-20 gap-10">
        <h2 className="md:text-3xl text-2xl font-bold">
          Welcome to the Vite App
        </h2>
        <ul className="md:max-w-2xl mt-4 md:space-y-8 space-y-6">
          <li className="flex items-center gap-x-4">
            <div className="flex items-center">
              <Check className="md:h-8 md:w-8 h-6 w-6 text-green-500" />
            </div>
            <span className="md:text-xl text-sm">
              Leverages the power of a monorepo to manage multiple projects in a
              single codebase.
            </span>
          </li>
          <li className="flex items-center gap-x-4">
            <div className="flex items-center">
              <Check className="md:h-8 md:w-8 h-6 w-6 text-green-500" />
            </div>
            <span className="md:text-xl text-sm">
              Simplifies dependency management while keeping the code clean and
              organized.
            </span>
          </li>
          <li className="flex items-cente gap-x-4">
            <div className="flex items-center">
              <Check className="md:h-8 md:w-8 h-6 w-6 text-green-500" />
            </div>

            <span className="md:text-xl text-sm">
              Mimics a Next.js page to showcase custom and shadcn components
              from the workspace (<code>packages/ui</code>).
            </span>
          </li>
        </ul>
      </Container>
    </div>
  );
}
