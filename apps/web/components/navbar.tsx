"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@workspace/ui/components/button";
import { motion } from "framer-motion";
import { BeamLogoDark } from "@workspace/ui/components/beam-components/icons";
import Link from "next/link";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayVariants = {
    hidden: { opacity: 0, transition: { duration: 0.1, ease: "easeOut" } }, // Fade out quickly
    visible: { opacity: 1, transition: { duration: 0.2, ease: "easeInOut", delay: 0.3 } }, // Fade in slower
  };

  // Framer Motion Variants for the Drawer Menu
  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { duration: 0.25, ease: "easeInOut", delay: 0.15 } }, // Slides down after overlay
  };

  return (
    <nav className="fixed w-full z-50">
      <div className="relative z-50 bg-white">
        <div className="container mx-auto p-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <BeamLogoDark className="h-auto w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            <Link href="/news" className="text-lg font-medium">Newsroom</Link>
            <Link href="/about" className="text-lg font-medium">About us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden transition-all duration-300">
            {isOpen ? (
              <button onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            ) : (
              <button onClick={() => setIsOpen(true)}>
                <Menu className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      <motion.div
        className="fixed inset-0 top-[4rem] bg-black/50 h-screen w-full z-40"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={overlayVariants}
        onClick={() => setIsOpen(false)} // Clicking outside closes menu
      />

      <motion.div
        className="absolute left-0 top-full w-full bg-white shadow-md rounded-b-2xl z-40"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuVariants}
      >
        <div className="p-6 flex flex-col items-center space-y-6">
          <Link href="/news" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
            Newsroom
          </Link>
          <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
            About us
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
