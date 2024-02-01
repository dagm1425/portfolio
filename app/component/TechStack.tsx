"use client";

import React, { useEffect, useRef, useState } from 'react';
import { SvgProps } from "../typings/index";
import { Html, Css, Js, Ts, ReactJs, NextJs, Firebase, Jest, Sass, TailwindCss, StyledComponents, MaterialUi, Gsap, FramerMotion } from '../assets/svg/index';
import { MotionValue, motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

interface svgTyping {
  title: string,
  svg: React.FC<SvgProps>,
}

interface RowProps {
  svgData: svgTyping[],
  x: MotionValue<number>,
}

const Row: React.FC<RowProps> = ({ svgData, x }) => {
  return (
    <motion.div style={{x}} className='w-full flex gap-4 justify-center'>
      {svgData.map((item, index) => (
        <div key={index} className='w-48 h-32 grid place-items-center backdrop-brightness-[1.25] rounded-2xl'>
          <item.svg color="#fff" width={50} height={50}/>
        </div>
      ))}
    </motion.div>
  )
}

const TechStack = () => {  
  const container = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState<{width: number, height: number}>({width:0, height:0});
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"], // adjust "start end" after making final spacing
  });
  const { height } = dimension; // also try with width
  const x = useTransform(scrollYProgress, [0, 1], [0, height * .3]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, height * -.3]);
  const svgData = [
    { title: 'HTML', svg: Html },
    { title: 'CSS', svg: Css },
    { title: 'Javascript', svg: Js },
    { title: 'Typescript', svg: Ts },
    { title: 'React', svg: ReactJs },
    { title: 'Next.js', svg: NextJs },
    { title: 'Firebase', svg: Firebase },
  ];

  const svgData2 = [
    { title: 'Jest', svg: Jest },
    { title: 'SASS', svg: Sass },
    { title: 'Tailwind CSS', svg: TailwindCss },
    { title: 'Styled Components', svg: StyledComponents },
    { title: 'Material UI', svg: MaterialUi },
    { title: 'GSAP', svg: Gsap },
    { title: 'Framer Motion', svg: FramerMotion },
  ];

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <div ref={container} className='py-36 px-4 flex flex-col gap-4 overflow-hidden'>
      <Row svgData={svgData} x={x} />
      <Row svgData={svgData2} x={x2} />
    </div>
  );
};

export default TechStack;
