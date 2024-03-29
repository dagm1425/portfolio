"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import AnimatedLink from "./AnimatedLink";
import { AnimatePresence, motion } from "framer-motion";

interface NavbarProps {
    setIsLinkActive: Dispatch<SetStateAction<boolean>>;
}

const navLinks = [
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
        <nav className="fixed top-4 w-full flex justify-center items-center gap-16 text-white text-md uppercase px-8 py-2 z-10">
            {navLinks.map((link, i) => {
                return (
                    <div key={i}
                      className="relative" 
                      onMouseEnter={() => setIsLinkActive(true)}
                      onMouseLeave={() => setIsLinkActive(false)}>
                        <AnimatedLink title={link.title}/>
                    </div>
                )
            })}
        </nav>
    )
}

interface ScrollNavbarProps {
    setIsLinkActive: (value: boolean) => void;
    isScrolling: boolean;
}

const ScrollNavbar: React.FC<ScrollNavbarProps> = ({ setIsLinkActive, isScrolling }) => {
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
                      className="relative" 
                      onMouseEnter={() => setIsLinkActive(true)}
                      onMouseLeave={() => setIsLinkActive(false)}>
                        <AnimatedLink title={link.title}/>
                    </div>
                )
            })}
        </motion.nav>
    )
}


export default Navbar;