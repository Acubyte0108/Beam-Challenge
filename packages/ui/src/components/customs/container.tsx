import * as React from "react"

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container flex flex-col min-h-screen mx-auto bg-white/[2%]">
      {children}
    </div>
  );
};