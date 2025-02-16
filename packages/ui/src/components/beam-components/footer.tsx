import {
  BeamLogoLight,
  LinkedinIcon,
  LineIcon,
} from "@workspace/ui/components/beam-components/icons";
import { Container } from "@workspace/ui/components/customs/container";

export const BeamFooter = () => {
  return (
    <div className="w-full h-56 md:h-48 flex flex-col items-center justify-center bg-black">
      <Container className="md:gap-y-12 gap-y-10">
        <div className="w-full flex items-center justify-between">
          <BeamLogoLight />
          <div className="flex items-center md:gap-6 gap-4">
            <LinkedinIcon className="cursor-pointer" />
            <LineIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[#CED4DA] text-sm flex-wrap gap-y-2 md:gap-0">
          <p>&copy; 2025 Beam. All rights reserved.</p>
          <div className="flex items-center gap-x-6 md:gap-x-4 gap-y-2 md:gap-y-0 flex-wrap pr-10 md:pr-0">
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">Terms & Conditions</a>
            <a className="hover:text-white" href="#">Cookie Settings</a>
          </div>
        </div>
      </Container>
    </div>
  );
};
