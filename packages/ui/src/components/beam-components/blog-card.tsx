import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@workspace/ui/components/card";

type BlogCardProps = {
  imageComponent: React.ReactNode;
  title: string;
  description: string;
};

export const BlogCard = ({
  imageComponent,
  title,
  description,
}: BlogCardProps) => {
  return (
    <Card className="rounded-xl h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.01] md:max-h-[450px] max-h-[380px]">
      <CardHeader className="p-0 h-1/2">
        {imageComponent}
      </CardHeader>

      <CardContent className="h-2/5 p-6 pb-0 flex flex-col gap-y-4">
        <h3 className="md:text-2xl font-semibold text-xl capitalize">{title}</h3>
        <p className="text-[#363E59] md:font-light md:text-lg text-sm">{description}</p>
      </CardContent>

      <CardFooter className="h-1/10 p-0 px-6">
        <a
          href="#"
          className="text-[#265BEA] font-semibold md:text-lg text-sm flex items-center gap-1"
        >
          Read more →
        </a>
      </CardFooter>
    </Card>
  );
};
