"use client";

import { useState } from "react";
import About from "./ui/About";
import Navbar from "./ui/navbar/Navbar";
import CustomCursor from "./ui/CustomCursor";
import Projects from "./ui/Projects";
import TechStack from "./ui/TechStack";
import Hero from "./ui/Hero";
import { ModalTyping } from "./typings";
import Contact from "./ui/Contact";

const Home = () => {
  const [isLinkActive, setIsLinkActive] = useState<boolean>(false);
  const [modal, setModal] = useState<ModalTyping>({
    isActive: false,
    index: 0,
  });
  const [isBlobLoading, setIsBlobLoading] = useState<boolean>(true);

  return (
    <main
      className={`${isBlobLoading ? "h-screen overflow-y-hidden" : "h-auto overflow-y-auto"}`}
    >
      <Navbar setIsLinkActive={setIsLinkActive} />
      <Hero isBlobLoading={isBlobLoading} setIsBlobLoading={setIsBlobLoading} />
      <About />
      <Projects modal={modal} setModal={setModal} />
      <TechStack />
      <Contact setIsLinkActive={setIsLinkActive} />
      <CustomCursor isLinkActive={isLinkActive} modal={modal} />
    </main>
  );
};

export default Home;
