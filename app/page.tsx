"use client";

import { useState } from "react";
import About from "./component/About";
import Navbar from "./component/navbar/Navbar";
import CustomCursor from "./component/CustomCursor";
import Projects from "./component/Projects";
import TechStack from "./component/TechStack";
import Hero from "./component/Hero";
import { ModalTyping } from "./typings";
import Contact from "./component/Contact";

const Home = () => {
  const [isLinkActive, setIsLinkActive] = useState<boolean>(false);
  const [modal, setModal] = useState<ModalTyping>({isActive: false, project: 0});
  const [isBlobLoading, setIsBlobLoading] = useState<boolean>(true);

  return (
    <main className={`${isBlobLoading ? "h-screen overflow-y-hidden" : "h-auto overflow-y-auto"}`}> 
        <Navbar setIsLinkActive={setIsLinkActive}/> 
        <Hero isBlobLoading={isBlobLoading} setIsBlobLoading={setIsBlobLoading}/>
        <About />
        <Projects modal={modal} setModal={setModal}/>
        <TechStack />
        <Contact setIsLinkActive={setIsLinkActive}/>
        <CustomCursor isLinkActive={isLinkActive} modal={modal}/>
    </main>
  )
}

export default Home;