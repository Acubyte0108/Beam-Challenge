import * as React from "react";
import { cn } from "@workspace/ui/lib/utils"

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("container mx-auto flex flex-col px-6 lg:px-10", className)}>
      {children}
    </div>
  );
};
