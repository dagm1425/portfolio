"use client";

import React, { useEffect, useRef, useState } from "react";
import { SvgProps } from "../typings/index";
import {
  Js,
  Ts,
  ReactJs,
  NextJs,
  RestApi,
  Redux,
  Firebase,
  Aws,
  Python,
  Jest,
  Sass,
  TailwindCss,
  StyledComponents,
  MaterialUi,
  Gsap,
  FramerMotion,
} from "../assets/svg/index";
import { MotionValue, motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";

interface svgTyping {
  title: string;
  svg: React.FC<SvgProps>;
}

interface RowProps {
  svgData: svgTyping[];
  x: MotionValue<number>;
}

const Row: React.FC<RowProps> = ({ svgData, x }) => {
  return (
    <motion.div
      style={{ x }}
      className="w-full flex gap-3 sm:gap-4 justify-center"
    >
      {svgData.map((item, index) => (
        <div
          key={index}
          className="w-[11rem] h-[5.5rem] flex-none sm:h-32 grid place-items-center backdrop-brightness-[1.40] rounded-2xl"
        >
          <item.svg color="#fff" width={50} height={50} />
        </div>
      ))}
    </motion.div>
  );
};

const TechStack = () => {
  const container = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const translationRate = 0.2;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * translationRate],
  );
  const x2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height * -translationRate],
  );
  const svgData = [
    { title: "Javascript", svg: Js },
    { title: "Typescript", svg: Ts },
    { title: "React", svg: ReactJs },
    { title: "Next.js", svg: NextJs },
    { title: "Redux", svg: Redux },
    { title: "RestApi", svg: RestApi },
    { title: "Firebase", svg: Firebase },
    { title: "AWS", svg: Aws },
    { title: "Python", svg: Python },
    { title: "Jest", svg: Jest },
    { title: "SASS", svg: Sass },
    { title: "Tailwind CSS", svg: TailwindCss },
    { title: "Styled Components", svg: StyledComponents },
    { title: "Material UI", svg: MaterialUi },
    { title: "GSAP", svg: Gsap },
    { title: "Framer Motion", svg: FramerMotion },
  ];
  const fragmentedSvgData = [
    { x: x, data: svgData.slice(0, 8) },
    { x: x2, data: svgData.slice(8, 17) },
  ];

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={container}
      className="hidden md:flex py-28 md:py-48 lg:py-52 px-4 flex-col gap-4 overflow-hidden"
    >
      {fragmentedSvgData.map((svgData, i) => {
        return <Row key={i} svgData={svgData.data} x={svgData.x} />;
      })}
    </div>
  );
};

export default TechStack;
