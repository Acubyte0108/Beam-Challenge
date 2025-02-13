import { Card, CardHeader, CardFooter, CardContent } from "@workspace/ui/components/card";

type BlogCardProps = {
  imageComponent: React.ReactNode;
  title: string;
  description: string;
};

export const BlogCard = ({ imageComponent, title, description }: BlogCardProps) => {
  return (
    <Card className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
      {/* Image Section */}
      <CardHeader className="h-40 bg-gray-200 flex items-center justify-center p-0">
        {imageComponent}
      </CardHeader>

      {/* Content Section */}
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>

      {/* Footer with Read More Link */}
      <CardFooter className="p-4">
        <a href="#" className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline">
          Read more →
        </a>
      </CardFooter>
    </Card>
  );
};