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
import { BeamButton } from "@workspace/ui/components/beam-components/button";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center min-h-svh justify-between">
      <div>
        <div className="w-full text-4xl font-semibold flex items-center justify-center h-48 md:h-64 lg:h-80">
          <h2>About us</h2>
        </div>

        <Container className="md:gap-y-20 gap-6 max-w-7xl">
          <div className="grid md:grid-cols-2 md:gap-x-20 gap-x-10 gap-y-6 max-md:items-center">
            {/* Image */}
            <div className="w-full">
              <div className="w-full h-80 bg-gray-300" />
            </div>
            <div className="flex flex-col md:gap-8 gap-6 md:py-2">
              <h3 className="md:text-4xl text-2xl font-medium">Title</h3>
              <p className="text-gray-600 max-md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <BeamButton variantType="outline" className="md:w-1/5 w-1/3">
                See more
              </BeamButton>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-x-20 gap-x-10 gap-y-6 max-md:items-center">
            <div className="order-2 md:order-1 flex flex-col md:gap-8 gap-6 py-2">
              <h3 className="md:text-4xl text-2xl font-medium">Title</h3>
              <p className="text-gray-600 max-md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <BeamButton variantType="outline" className="md:w-1/5 w-1/3">
                See more
              </BeamButton>
            </div>
            {/* Image */}
            <div className="order-1 md:order-2">
              <div className="w-full h-80 bg-gray-300" />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="grid md:grid-cols-2 items-center py-20">
          <div className="w-full md:border-r-2 border-[#CED4DA] flex items-center justify-around md:h-40 px-10">
            <ForbesLogo className="" />
            <TcLogo className="" />
            <TechinasiaLogo className="" />
          </div>
          <div className="w-full flex items-center justify-around md:h-40 px-10">
            <SequoiaLogo className="" />
            <SurgeLogo className="" />
            <PartechLogo className="" />
          </div>
        </div>
      </Container>
    </div>
  );
}
