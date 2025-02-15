import React from "react";
import { cn } from "@workspace/ui/lib/utils";

type HeroBannerProps = {
  className?: string;
  children?: React.ReactNode;
};

export const HeroBanner = ({ className, children }: HeroBannerProps) => {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center text-3xl md:text-4xl font-semibold h-48 md:h-64 lg:h-80",
        className
      )}
    >
      {children}
    </div>
  );
};
