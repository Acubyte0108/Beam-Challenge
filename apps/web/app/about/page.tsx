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
import PlaceholderImage from "@workspace/ui/assets/placeholder.png";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center min-h-svh justify-between">
      <div>
        <div className="w-full text-4xl font-semibold flex items-center justify-center h-48 md:h-64 lg:h-80">
          <h2>About us</h2>
        </div>

        <Container className="md:gap-y-20 gap-y-10 max-w-7xl">
          <div className="grid md:grid-cols-2 md:gap-x-20 gap-x-10 gap-y-6 max-md:items-center">
            <Image src={PlaceholderImage} alt="Placeholder" width={490} height={320} className="w-full h-80"/>
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
            <Image src={PlaceholderImage} alt="Placeholder" width={490} height={320} className="w-full h-80 order-1 md:order-2"/>
          </div>
        </Container>
      </div>

      <Container className="mb-10">
        <div className="grid md:grid-cols-2 items-center md:py-20 py-10">
          <div className="w-full md:border-r-2 flex flex-col justify-between max-md:border-b-2 border-[#CED4DA] md:h-40">
            <h3 className="md:text-lg text-sm flex items-center justify-center md:py-4 p-6">As Seen On</h3>
            <div className="flex items-center justify-around md:px-10 p-4">
              <ForbesLogo className="max-md:hidden" />
              <TcLogo className="max-md:hidden" />
              <TechinasiaLogo className="max-md:hidden" />

              <ForbesLogo className="md:hidden" mobile/>
              <TcLogo className="md:hidden" mobile/>
              <TechinasiaLogo className="md:hidden" mobile/>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between md:h-40">
            <h3 className="md:text-lg text-sm flex items-center justify-center md:py-4 p-6">Backed By</h3>
            <div className="flex items-center justify-around md:px-10 p-4">
              <SequoiaLogo className="max-md:hidden" />
              <SurgeLogo className="max-md:hidden" />
              <PartechLogo className="max-md:hidden" />

              <SequoiaLogo className="md:hidden" mobile/>
              <SurgeLogo className="md:hidden" mobile/>
              <PartechLogo className="md:hidden" mobile/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
