"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Blob from "./Blob";
import { animate, motion, useMotionValue } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import { PiGlobeLight } from "react-icons/pi";

interface HeroProps {
  isBlobLoading: boolean;
  setIsBlobLoading: Dispatch<SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ isBlobLoading, setIsBlobLoading }) => {
  const zIndex = useMotionValue(30);
  const [width, setWidth] = useState<number>(0);
  const noOfBlinders = width < 1440 ? 5 : 10;
  const blindersArr = Array.from(Array(noOfBlinders).keys());

  useEffect(() => {
    if (!isBlobLoading) {
      animate(zIndex, -10, { delay: 1.2 });
    }
  }, [isBlobLoading, zIndex]);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const titleVariants = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: "30vh",
      translateX: -20,
    },
    animate: {
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        opacity: { duration: 0.35 },
        duration: 1,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 1.2,
      },
    },
  };

  const subtitleVariants = {
    initial: {
      y: "30vh",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.08, 0.82, 0.17, 1],
        delay: 2 + i * 0.2,
      },
    }),
  };

  const subtitleVariants2 = {
    initial: {
      x: "-65%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
        delay: 3.4,
      },
    },
  };

  const blinderVariants = {
    initial: {
      scaleY: 1,
    },
    animate: (i: number) => ({
      scaleY: 0,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1],
        delay: i * 0.07,
      },
    }),
  };

  const loaderTextVariants = {
    initial: {
      y: -84,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  const loaderContainerVariants = {
    initial: {
      opacity: 1,
      x: "-50%",
      y: "-50%",
    },
    animate: {
      opacity: 0,
      x: "-50%",
      y: "-50%",
    },
  };

  return (
    <section id="home" className="h-[55vh] md:h-[67vh] lg:h-[48vh] xl:h-auto">
      <Blob setIsBlobLoading={setIsBlobLoading} />
      <div className="absolute bottom-[35%] md:bottom-[33%] lg:bottom-[35%] xl:bottom-8 w-full md:-z-10 perspective-[120px] perspective-origin-bottom overflow-hidden">
        <motion.div
          variants={titleVariants}
          initial="initial"
          animate={!isBlobLoading ? "animate" : "initial"}
        >
          <h1 className="font-teko text-center text-white text-6xl md:text-[6.5rem] lg:text-9xl xl:text-[11rem] font-semibold uppercase leading-none">
            dagmawi nebeyu
          </h1>
        </motion.div>
      </div>
      <motion.div className="absolute top-[65%] md:top-[40%] lg:top-[35%] xl:top-52 md:right-12 lg:right-20 xl:right-60 w-full md:w-auto flex justify-center md:flex-col md:flex-start gap-2 md:-z-10">
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <motion.div
            variants={subtitleVariants}
            initial="initial"
            animate={!isBlobLoading ? "animate" : "initial"}
            custom={1}
            className="md:mb-6 lg:mb-12"
          >
            <GoArrowDownRight className="text-white text-[2.25rem]" />
          </motion.div>
        </div>
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <motion.p
            variants={subtitleVariants}
            initial="initial"
            animate={!isBlobLoading ? "animate" : "initial"}
            custom={2}
            className="text-2xl md:text-3xl text-white uppercase font-normal mb-1"
          >
            front-end
          </motion.p>
        </div>
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <motion.p
            variants={subtitleVariants}
            initial="initial"
            animate={!isBlobLoading ? "animate" : "initial"}
            custom={3}
            className="text-2xl md:text-3xl text-white uppercase font-normal"
          >
            developer
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        variants={subtitleVariants2}
        initial="initial"
        animate={!isBlobLoading ? "animate" : "initial"}
        className="absolute bottom-[46%] md:bottom-[46%] lg:bottom-[49%] xl:bottom-80 left-0 flex items-center gap-3 md:gap-4 lg:gap-5 text-white uppercase p-3 pl-6 lg:pl-12 xl:pl-16 bg-white bg-opacity-[0.1] rounded-r-full sm:-z-10"
      >
        <div className="pr-11 lg:pr-14 sm:py-1">
          <motion.p className="text-sm md:text-xl md:mb-1">working</motion.p>
          <motion.p className="text-sm md:text-xl">worldwide</motion.p>
        </div>
        <motion.div className="w-fit bg-[#1e1e21] p-2 sm:p-4 rounded-[50%] -translate-x-1/2 -mr-6 md:-mr-8">
          <PiGlobeLight className="text-4xl sm:text-[2.75rem]" />
        </motion.div>
      </motion.div>
      <motion.div
        className={`absolute top-0 left-0 w-full h-screen flex`}
        style={{ zIndex }}
      >
        {blindersArr.map((i) => {
          return (
            <motion.div
              key={i}
              variants={blinderVariants}
              custom={i + 1}
              initial="initial"
              animate={!isBlobLoading ? "animate" : "initial"}
              className={`h-screen bg-[#797986] origin-top ${noOfBlinders === 5 ? "w-[20vw]" : "w-[10vw]"}`}
            ></motion.div>
          );
        })}
      </motion.div>
      <motion.div
        variants={loaderContainerVariants}
        initial="initial"
        animate={!isBlobLoading ? "animate" : "initial"}
        className="absolute top-1/2 left-1/2 h-[84px] text-8xl uppercase overflow-hidden z-30"
      >
        <motion.h1
          variants={loaderTextVariants}
          initial="initial"
          animate="animate"
          className="font-teko leading-[.85]"
        >
          D | N
        </motion.h1>
        <motion.h1
          variants={loaderTextVariants}
          initial="initial"
          animate="animate"
          className="font-teko leading-[.85]"
        >
          D | N
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Hero;
