"use client";

import React, { useState } from "react";
import { Variants, motion } from "framer-motion";

interface AnimatedLinkProps {
    title: string;
}

interface AnimatedWordProps {
    title: string;
    animation: Variants,
    isHovered: boolean,
}

const titleAnimation = {
  initial: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.01,
    }
  },
  hover: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.01,
    }
  }
}

const letterAnimation = {
    initial: {
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      }
    },
    hover: {
      y: -25,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      }
    }
}

const letterAnimationTwo = {
    initial: {
      y: 25,
      transition: {
        duration: 0.35,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      }
    },
    hover: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, 0.01, 0.05, 0.95],
        type: "tween",
      }
    }
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ title }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <motion.div
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} 
          className="relative overflow-hidden cursor-pointer">
            <AnimatedWord title={title} animation={letterAnimation} isHovered={isHovered}/>
            <div className="absolute top-0">
              <AnimatedWord title={title} animation={letterAnimationTwo} isHovered={isHovered}/>
            </div>
        </motion.div>
    )
}

const AnimatedWord: React.FC<AnimatedWordProps> = ({ title, animation, isHovered }) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      className="whitespace-nowrap relative"
    >
      {title
        .split("")
        .map((character, i) =>
          character === " " ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <motion.span key={i} variants={animation} className="relative inline-block text-sm whitespace-nowrap">
                {character}
            </motion.span>
          )
        )}
    </motion.span>
  );
};

export default AnimatedLink;