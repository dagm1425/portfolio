"use client";

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';


const About = () => {
  const element = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"]
  });
  const paragraph = "Distinctive passion, pixel-perfect results. I build cutting edge front-end experiences that matter.";
  const words = paragraph.split(" ");

  const animatedWords = words.map((word, i) => {
    const start = i / words.length
    const end = start + (1 / words.length)
    
    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
  });

  return (
    <p 
    ref={element}         
    className="flex text-6xl px-64 py-10 max-w[1280px] flex-wrap text-white"
    >
      {animatedWords}
    </p>
  )
}


interface WordProps {
    children: string;
    progress: MotionValue<number>;
    range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])

  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-10">
        {children}
      </span>
      <motion.span 
        style={{ opacity}}
      >
        {children}
      </motion.span> 
    </span>
  )
}


export default About;