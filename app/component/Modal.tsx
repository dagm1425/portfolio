"use client";

import React, { useEffect, useRef } from "react";
import { ModalTyping, ProjectTyping } from "../typings";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";

interface ModalProps {
  modal: ModalTyping;
  projects: ProjectTyping[];
}

const scaleVariants = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  animate: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      ease: [0.45, 0, 0.55, 1],
    },
  },
  exit: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const Modal: React.FC<ModalProps> = ({ modal, projects }) => {
  const { isActive, index } = modal;
  const container = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);
      yMoveContainer(pageY);

      xMoveCursor(pageX);
      yMoveCursor(pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleVariants}
        initial="initial"
        animate={isActive ? "animate" : "exit"}
        className="absolute w-[300px] h-[200px] flex items-center justify-center overflow-hidden pointer-events-none"
      >
        <div className="w-full h-full absolute">
          {projects.map((project, i) => {
            return (
              <motion.img
                key={i}
                variants={imgVariants}
                animate={index === i ? "animate" : "initial"}
                src={`/images/${project.src}`}
                alt={project.title}
                className="absolute top-0 left-0 w-full h-full"
              />
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleVariants}
        initial="initial"
        animate={isActive ? "animate" : "exit"}
        className="absolute flex items-center justify-center w-14 h-14 bg-[#455CE9] text-white rounded-[50%] pointer-events-none"
      >
        <GoArrowUpRight className="text-[2rem]" />
      </motion.div>
    </>
  );
};

export default Modal;
