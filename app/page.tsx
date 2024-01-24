"use client";

import { useState } from "react";
import About from "./component/About";
import Navbar from "./component/navbar/Navbar";
import CustomCursor from "./component/CustomCursor";
import Projects from "./component/Projects";
import Hero from "./component/Hero";

const Home = () => {
  const [isLinkActive, setIsLinkActive] = useState<boolean>(false);

  return (
    <main> 
        <Navbar setIsLinkActive={setIsLinkActive}/> 
        <Hero />
        <div className="h-screen"></div>
        <About />
        <div className="h-screen"></div>
        <Projects />
        <CustomCursor isLinkActive={isLinkActive} />
    </main>
  )
}

export default Home;