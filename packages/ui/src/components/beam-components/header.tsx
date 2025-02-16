"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BeamLogoDark } from "@workspace/ui/components/beam-components/icons";
import { BeamButton } from "@workspace/ui/components/beam-components/button";

export type NavItem = {
  component: JSX.Element;
};

type BeamHeaderProps = {
  links: NavItem[];
  homeLogo?: JSX.Element;
};

export const BeamHeader = ({ links, homeLogo }: BeamHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (links.length > 4) {
    throw new Error(
      "Navbar cannot have more than 4 items. Please reduce the number of links."
    );
  }

  const overlayVariants = {
    hidden: { opacity: 0, transition: { duration: 0.1, ease: "easeOut" } },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut", delay: 0.3 },
    },
  };

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.25, ease: "easeInOut", delay: 0.15 },
    },
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 bg-white">
      <div className="relative z-50 h-full">
        <div className="container mx-auto px-4 md:px-10 flex items-center justify-between md:justify-normal h-full gap-x-32">
          <div className="flex items-center">
            {homeLogo ? homeLogo : <BeamLogoDark className="h-auto w-auto" />}
          </div>

          <nav className="hidden md:flex items-center gap-x-10">
            {links.map(({ component }, index) => (
              <BeamButton
                key={index}
                variantType="link"
                asChild
                className="text-lg"
              >
                {component}
              </BeamButton>
            ))}
          </nav>

          <div className="md:hidden transition-opacity duration-300 ease-in-out">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-20 bg-black/50 h-screen w-full z-30"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="absolute left-0 top-full w-full bg-white shadow-md rounded-b-2xl z-40"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={menuVariants}
      >
        <nav className="p-6 pt-0 flex flex-col items-center gap-y-6">
          {links.map(({ component }, index) => (
            <BeamButton
              key={index}
              variantType="link"
              asChild
              onClick={() => setIsOpen(false)}
            >
              {component}
            </BeamButton>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};
