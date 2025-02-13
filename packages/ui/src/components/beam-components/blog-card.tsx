import { Card, CardHeader, CardFooter, CardContent } from '@workspace/ui/components/card'

type BlogCardProps = {
    imageComponent?: React.ReactNode;
}

export const BlogCard = ({ imageComponent }: BlogCardProps) => {
    return (
      <Card className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
        {/* Image Placeholder */}
        <CardHeader className="h-40 bg-gray-200 flex items-center justify-center">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            {/* Placeholder for Image */}
            <span className="text-gray-400">Image</span>
          </div>
        </CardHeader>
  
        {/* Content Section */}
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">Title</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </CardContent>
  
        {/* Footer with Read More Link */}
        <CardFooter className="p-4">
          <a href="#" className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline">
            Read more →
          </a>
        </CardFooter>
      </Card>
    );
  }