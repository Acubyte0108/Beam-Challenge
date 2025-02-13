import React from "react";
import { Button, ButtonProps } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";

type BeamButtonProps = Omit<ButtonProps, "variant"> & {
  variantType?: "default" | "outline" | "link";
};

const BeamButton = React.forwardRef<HTMLButtonElement, BeamButtonProps>(
  ({ variantType = "default", className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "bg-white text-primary transition-all duration-300 active:scale-95 active:border-2 active:border-black active:duration-150",
          variantType === "default" && "border-transparent",
          variantType === "outline" && "border-[#CED4DA]",
          variantType === "link" &&
          "bg-transparent border-none hover:bg-transparent hover:text-[#265BEA] active:scale-100 active:border-none active:duration-300",
          className
        )}
        {...props}
      />
    );
  }
);

export { BeamButton };
