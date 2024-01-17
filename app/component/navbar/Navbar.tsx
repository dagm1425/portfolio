"use client";

import React from "react";
import AnimatedLink from "./AnimatedLink";

const Navbar = () => {
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

export default Navbar;