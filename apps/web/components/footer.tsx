import React from "react";
import {
  BeamLogoLight,
  LinkedinIcon,
  LineIcon,
} from "@workspace/ui/components/beam-components/icons";

export const BeamFooter = () => {
  return (
    <div className="w-full h-56 md:h-48 flex flex-col items-center justify-center bg-black">
      <div className="w-full flex flex-col container mx-auto px-10 md:gap-y-12 gap-y-10">
        <div className="w-full flex items-center justify-between">
          <BeamLogoLight />
          <div className="flex items-center gap-4">
            <LinkedinIcon className="cursor-pointer" />
            <LineIcon className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[#CED4DA] text-sm flex-wrap gap-y-2 md:gap-0">
          <p>&copy; 2025 Beam. All rights reserved.</p>
          <div className="flex items-center gap-x-6 md:gap-x-4 gap-y-2 md:gap-y-0 flex-wrap">
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">Terms & Conditions</a>
            <a className="hover:text-white" href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </div>
  );
};
