import { Menu, X } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { Sheet, SheetContent, SheetTrigger } from "@workspace/ui/components/sheet";
import { BeamLogoLight } from "@workspace/ui/components/beam-components/icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    // <nav className="border-b bg-white">
    //   <div className="container mx-auto px-4 flex items-center justify-between py-4">
    //     {/* Logo */}
    //     <div className="flex items-center space-x-4">
    //       <BeamLogoLight className="h-8 w-auto" />
    //     </div>

    //     {/* Desktop Navigation */}
    //     <div className="hidden md:flex space-x-6">
    //       <a href="#newsroom" className="text-gray-700 hover:text-black">Newsroom</a>
    //       <a href="#about" className="text-gray-700 hover:text-black">About us</a>
    //     </div>

    //     {/* Mobile Menu */}
    //     <div className="md:hidden">
    //       <Sheet>
    //         <SheetTrigger asChild>
    //           <Button variant="ghost" size="icon">
    //             <Menu className="h-6 w-6" />
    //           </Button>
    //         </SheetTrigger>
    //         <SheetContent side="top" className="p-6 flex flex-col items-center justify-center shadow-lg rounded-2xl">
    //           <div className="absolute top-4 right-4">
    //             <SheetTrigger asChild>
    //               <Button variant="ghost" size="icon">
    //                 <X className="h-6 w-6" />
    //               </Button>
    //             </SheetTrigger>
    //           </div>
    //           <BeamLogoLight className="h-10 w-auto mb-6" />
    //           <a href="#newsroom" className="text-lg font-semibold text-gray-900 mb-4">Newsroom</a>
    //           <a href="#about" className="text-lg font-semibold text-gray-900">About us</a>
    //         </SheetContent>
    //       </Sheet>
    //     </div>
    //   </div>
    // </nav>

    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-md">
      <div className="container mx-auto p-4 flex items-center gap-x-32">

        <div className="flex items-center space-x-4">
          <BeamLogoLight className="h-auto w-auto" />
        </div>

        <div className="hidden md:flex space-x-10">
          <Button asChild variant="ghost">
            <Link href="/news">Newsroom</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/about">About us</Link>
          </Button>
        </div>
      </div>
    </nav >
  );
}
