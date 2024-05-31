"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import AnimatedLink from "./AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {
    setIsLinkActive: Dispatch<SetStateAction<boolean>>;
}

const navLinks = [
  { title: "Home", href: "#home"},
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const Navbar: React.FC<NavbarProps> = ({ setIsLinkActive }) => {
    const [isScrolling, setIsScrolling] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      setIsLinkActive(false);

    }, [isScrolling, setIsLinkActive]);

    return (
      <>
        <AnimatePresence>
          {isScrolling ? (
            <ScrollNavbar setIsLinkActive={setIsLinkActive} isScrolling={isScrolling} />
          ) : (
            <FixedNavbar setIsLinkActive={setIsLinkActive}/>
          )}
        </AnimatePresence>
      </>
    );
}

const FixedNavbar: React.FC<NavbarProps> = ({ setIsLinkActive }) => {
    return (
        <nav className="fixed w-full flex justify-between items-center text-white px-6 py-3 md:px-12 md:py-7 xl:py-5">
            <h1 className="font-teko text-4xl md:text-5xl mr-auto"><a href="#home">D | N</a></h1>
            <div className="flex gap-4 md:gap-10 lg:gap-12 text-sm md:text-lg xl:text-sm font-semibold uppercase -mt-2">
            {navLinks
              .filter((_, i) => i !== 0)
              .map((link, i) => (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => setIsLinkActive(true)}
                  onMouseLeave={() => setIsLinkActive(false)}
                >
                  <AnimatedLink title={link.title} href={link.href} />
                </div>
              ))}
            </div>
        </nav>
    )
}

interface ScrollNavbarProps {
    setIsLinkActive: (value: boolean) => void;
    isScrolling: boolean;
}

const ScrollNavbar: React.FC<ScrollNavbarProps> = ({ setIsLinkActive, isScrolling }) => {
    const navVariants = {
        initial: {
          y: -50,
          x: "-50%",
          opacity: 0,
        },
        animate: {
          y: 0,
          x: "-50%",
          opacity: 1,
          transition: {
            type: "spring",
            damping: 10,
            stiffness: 100,
          },
        },
        exit: {
          y: -50,
          opacity: 0,
        },
    };

    return (
        <motion.nav
          key={1}
          initial="initial"
          animate={isScrolling ? "animate" : "initial"}
          exit="exit"
          variants={navVariants}
          className="fixed left-1/2 top-4 flex justify-center gap-7 sm:gap-9 text-white text-sm md:text-lg xl:text-sm font-semibold bg-[#ffffff14] backdrop-blur-lg uppercase px-8 py-2 border rounded-[32px] border-[#ffffff14] z-10">
            {navLinks.map((link, i) => {
                return (
                    <div key={i}
                      className="relative" 
                      onMouseEnter={() => setIsLinkActive(true)}
                      onMouseLeave={() => setIsLinkActive(false)}>
                        <AnimatedLink title={link.title} href={link.href}/>
                    </div>
                )
            })}
        </motion.nav>
    )
}


export default Navbar;