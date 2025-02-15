import { HeroBanner } from "@workspace/ui/components/customs/hero-banner";
import { Container } from "@workspace/ui/components/customs/container";
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
      <div className="py-4">
        <HeroBanner>
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
                    width={500}
                    height={300}
                    className="object-cover rounded-xl w-full h-full"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-md:hidden" />
            <CarouselNext className="max-md:hidden" />
          </Carousel>
        </Container>
      </HeroBanner>
      </div>
      
      <Container>
        <div className="flex flex-col items-center justify-center flex-1">
          <h2 className="text-2xl font-bold">Welcome to our website</h2>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Container>
    </div>
  );
}
