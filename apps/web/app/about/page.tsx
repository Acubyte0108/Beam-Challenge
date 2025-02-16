import Image from "next/image";
import {
  ForbesLogo,
  TcLogo,
  TechinasiaLogo,
  SequoiaLogo,
  SurgeLogo,
  PartechLogo,
} from "@workspace/ui/components/beam-components/icons";
import { Container } from "@workspace/ui/components/customs/container";
import { HeroBanner } from "@workspace/ui/components/customs/hero-banner";
import { BeamButton } from "@workspace/ui/components/beam-components/button";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center min-h-svh justify-between">
      <div>
        <HeroBanner>
          <h2>About us</h2>
        </HeroBanner>

        <Container className="md:gap-y-20 gap-y-10 max-w-7xl">
          <div className="grid md:grid-cols-2 xl:gap-x-20 gap-x-10 gap-y-6 max-md:items-center">
            <div className="w-full">
              <Image
                src="https://picsum.photos/id/45/490/320"
                alt="Story1"
                width={490}
                height={320}
                priority
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col xl:gap-8 gap-6 md:py-2">
              <h3 className="xl:text-4xl md:text-3xl text-2xl font-medium">
                Title
              </h3>
              <p className="max-md:text-sm xl:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <BeamButton variantType="outline" className="xl:w-1/5 w-1/3">
                See more
              </BeamButton>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:gap-x-20 gap-x-10 gap-y-6 max-md:items-center">
            <div className="order-2 md:order-1 flex flex-col xl:gap-8 gap-6 md:py-2">
              <h3 className="xl:text-4xl md:text-3xl text-2xl font-medium">
                Title
              </h3>
              <p className="max-md:text-sm xl:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <BeamButton variantType="outline" className="xl:w-1/5 w-1/3">
                See more
              </BeamButton>
            </div>
            <div className="w-full order-1 md:order-2">
              <Image
                src="https://picsum.photos/id/96/490/320"
                alt="Story2"
                width={490}
                height={320}
                priority
                className="w-full h-full"
              />
            </div>
          </div>
        </Container>
      </div>

      <Container className="mb-10">
        <div className="w-full grid md:grid-cols-2 items-center md:py-20 py-10">
          <div className="w-full md:border-r-2 grid grid-rows-2 max-md:border-b-2 border-[#CED4DA] md:h-full h-32 md:py-3 py-4 xl:gap-y-10">
            <h3 className="xl:text-lg text-sm flex justify-center max-md:items-center">
              As Seen On
            </h3>
            <div className="grid grid-cols-3 items-center justify-items-center">
              <ForbesLogo className="max-xl:hidden" />
              <TcLogo className="max-xl:hidden" />
              <TechinasiaLogo className="max-xl:hidden" />

              <ForbesLogo className="xl:hidden" mobile />
              <TcLogo className="xl:hidden" mobile />
              <TechinasiaLogo className="xl:hidden" mobile />
            </div>
          </div>
          <div className="w-full grid grid-rows-2 md:h-full h-32 md:py-3 py-4 xl:gap-y-10">
            <h3 className="xl:text-lg text-sm flex justify-center max-md:items-center">
              Backed By
            </h3>
            <div className="grid grid-cols-3 items-center justify-items-center">
              <SequoiaLogo className="max-xl:hidden" />
              <SurgeLogo className="max-xl:hidden" />
              <PartechLogo className="max-xl:hidden" />

              <SequoiaLogo className="xl:hidden" mobile />
              <SurgeLogo className="xl:hidden" mobile />
              <PartechLogo className="xl:hidden" mobile />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
