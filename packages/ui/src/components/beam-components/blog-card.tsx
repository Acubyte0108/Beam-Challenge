import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";

type BlogCardProps = {
  imageComponent: React.ReactNode;
  title: string;
  description: string;
};

const BlogCard = ({ imageComponent, title, description }: BlogCardProps) => {
  return (
    <Card className="rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.01] lg:h-[450px] md:h-[380px] h-[360px]">
      <CardHeader className="p-0 h-1/2">{imageComponent}</CardHeader>

      <CardContent className="h-2/5 p-6 pb-0 flex flex-col lg:gap-y-4 gap-y-2">
        <h3 className="lg:text-2xl font-semibold text-xl capitalize">
          {title}
        </h3>
        <p className="text-[#363E59] lg:font-light lg:text-lg text-sm line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter className="h-1/10 p-0 px-6">
        <a
          href="#"
          className="text-[#265BEA] font-semibold lg:text-lg text-sm flex items-center gap-1"
        >
          Read more →
        </a>
      </CardFooter>
    </Card>
  );
};

const BlogCardSkeleton = () => {
  return (
    <Card className="rounded-xl cursor-pointer transition-all duration-300 md:h-[450px] h-[380px] animate-pulse">
      <CardHeader className="p-0 h-1/2">
        <Skeleton className="w-full h-full rounded-t-xl" />
      </CardHeader>

      <CardContent className="h-2/5 p-6 pb-0 flex flex-col gap-y-4">
        <Skeleton className="w-3/4 h-6 md:h-8 rounded-md" />

        <div className="space-y-2">
          <Skeleton className="w-full h-4 md:h-5 rounded-md" />
          <Skeleton className="w-full h-4 md:h-5 rounded-md" />
          <Skeleton className="w-5/6 h-4 md:h-5 rounded-md" />
        </div>
      </CardContent>

      <CardFooter className="h-1/10 p-0 px-6">
        <Skeleton className="w-24 h-5 md:h-6 rounded-md" />
      </CardFooter>
    </Card>
  );
};

export { BlogCard, BlogCardSkeleton };
