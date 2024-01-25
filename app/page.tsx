"use client";

import { useState } from "react";
import About from "./component/About";
import Navbar from "./component/navbar/Navbar";
import CustomCursor from "./component/CustomCursor";
import Projects from "./component/Projects";
import TechStack from "./component/TechStack";
import Hero from "./component/Hero";
import { ModalTyping } from "./typings";

const Home = () => {
  const [isLinkActive, setIsLinkActive] = useState<boolean>(false);
  const [modal, setModal] = useState<ModalTyping>({isActive: false, project: 0});

  return (
    <main> 
        <Navbar setIsLinkActive={setIsLinkActive}/> 
        <Hero />
        <div className="h-screen"></div>
        <About />
        <div className="h-screen"></div>
        <Projects modal={modal} setModal={setModal}/>
        <TechStack />
        <CustomCursor isLinkActive={isLinkActive} modal={modal}/>
    </main>
  )
}

export default Home;