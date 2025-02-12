type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container flex flex-col min-h-screen mx-auto bg-white/[2%]">
      {children}
    </div>
  );
};