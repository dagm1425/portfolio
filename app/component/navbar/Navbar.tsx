"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLink from "./AnimatedLink";

const Navbar = () => {
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
  
    return (
      <>
        <AnimatePresence>
          {isScrolling ? (
            <ScrollNavbar isScrolling={isScrolling} />
          ) : (
            <FixedNavbar />
          )}
        </AnimatePresence>
      </>
    );
}

const FixedNavbar = () => {
    const navLinks = [
        { title: "About", href: "#about" },
        { title: "Projects", href: "#projects" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-4 w-full flex justify-center items-center gap-16 text-white text-md uppercase px-8 py-2 z-10">
            {navLinks.map((link, i) => {
                return (
                    <div key={i}
                      className="relative">
                        <AnimatedLink title={link.title}/>
                    </div>
                )
            })}
        </nav>
    )
}

interface ScrollNavbarProps {
    isScrolling: boolean;
}

const ScrollNavbar: React.FC<ScrollNavbarProps> = ({ isScrolling }) => {
    const navLinks = [
        { title: "About", href: "#about" },
        { title: "Projects", href: "#projects" },
        { title: "Contact", href: "#contact" },
    ];

    const NavAnimations = {
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
          variants={NavAnimations}
          className="fixed left-1/2 top-4 flex justify-center gap-16 text-white text-md bg-[#ffffff14] backdrop-blur-lg uppercase px-8 py-2 border rounded-[32px] border-[#ffffff14] z-10">
            {navLinks.map((link, i) => {
                return (
                    <div key={i}
                      className="relative">
                        <AnimatedLink title={link.title}/>
                    </div>
                )
            })}
        </motion.nav>
    )
}


export default Navbar;