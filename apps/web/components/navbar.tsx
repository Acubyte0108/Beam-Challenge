"use client"

import { Menu, X } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { BeamLogoLight } from "@workspace/ui/components/beam-components/icons";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    // <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-md">
    //   <div className="container mx-auto p-4 flex items-center gap-x-32">

    //     <div className="flex items-center space-x-4">
    //       <BeamLogoLight className="h-auto w-auto" />
    //     </div>

    //     <div className="hidden md:flex space-x-10">
    //       <Button asChild variant="ghost">
    //         <Link href="/news">Newsroom</Link>
    //       </Button>
    //       <Button asChild variant="ghost">
    //         <Link href="/about">About us</Link>
    //       </Button>
    //     </div>

    //   </div>
    // </nav >


    <nav className="fixed w-full z-50 bg-white">
      <div className="relative z-50">
        <div className="container mx-auto p-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <BeamLogoLight className="h-auto w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <Button asChild variant="ghost">
              <Link href="/news">Newsroom</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/about">About us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {isOpen ? (
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                <Menu className="h-6 w-6" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Smooth Drawer from Bottom of Navbar) */}
      <div
        className={`absolute left-0 top-full w-full bg-white shadow-md rounded-b-2xl transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          } z-40`}
      >
        <div className="p-6 flex flex-col items-center space-y-6">
          <Link href="/news" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
            Newsroom
          </Link>
          <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
            About us
          </Link>
        </div>
      </div>
    </nav>
  );
}
