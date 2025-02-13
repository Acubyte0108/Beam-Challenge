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
    <Card className="rounded-xl h-full cursor-pointer">
      <CardHeader className="p-0 h-1/2">
        {imageComponent}
      </CardHeader>

      <CardContent className="h-2/5 p-6 pb-0 flex flex-col gap-y-6">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-[#363E59] text-lg">{description}</p>
      </CardContent>

      <CardFooter className="h-1/10 p-0 px-6">
        <a
          href="#"
          className="text-[#265BEA] font-semibold text-lg flex items-center gap-1 hover:underline"
        >
          Read more →
        </a>
      </CardFooter>
    </Card>
  );
};
