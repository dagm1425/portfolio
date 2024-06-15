"use client";

import React, { useState } from "react";
import { Variants, motion } from "framer-motion";

interface AnimatedLinkProps {
  title: string;
  href?: string;
}

interface AnimatedWordProps {
  title: string;
  animation: Variants;
  isHovered: boolean;
}

const titleVariants = {
  initial: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.01,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.01,
    },
  },
};

const letterVariants = {
  initial: {
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
  animate: {
    y: -25,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const letterVariants2 = {
  initial: {
    y: 25,
    transition: {
      duration: 0.35,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ title, href }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleScroll = (e: React.MouseEvent, targetId: string | undefined) => {
    if (!targetId) return;

    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.a
      href={href}
      rel="noopener noreferrer"
      target={href?.startsWith("#") ? "" : "_blank"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        if (href && href.startsWith("#")) {
          handleScroll(e, href.substring(1));
        }
      }}
      className="relative inline-block overflow-hidden cursor-pointer"
    >
      <AnimatedWord
        title={title}
        animation={letterVariants}
        isHovered={isHovered}
      />
      <div className="absolute top-0">
        <AnimatedWord
          title={title}
          animation={letterVariants2}
          isHovered={isHovered}
        />
      </div>
    </motion.a>
  );
};

const AnimatedWord: React.FC<AnimatedWordProps> = ({
  title,
  animation,
  isHovered,
}) => {
  return (
    <motion.span
      variants={titleVariants}
      initial="initial"
      animate={isHovered ? "animate" : "initial"}
      className="whitespace-nowrap relative uppercase"
    >
      {title.split("").map((character, i) =>
        character === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            key={i}
            variants={animation}
            className="relative inline-block text-[inherit] whitespace-nowrap"
          >
            {character}
          </motion.span>
        ),
      )}
    </motion.span>
  );
};

export default AnimatedLink;
