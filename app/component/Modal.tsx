"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ModalTyping, ProjectTyping } from "../typings";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";

interface ModalProps {
    modal: ModalTyping,
    projects: ProjectTyping[],
}

const ScaleVariants = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    open: { scale: 1, x: "-50%", y: "-50%", transiton: { duration: 0, ease: [0.45, 0, 0.55, 1]} },
    close: { scale: 0, x: "-50%", y: "-50%", transiton: { duration: 0, ease: [0.87, 0, 0.13, 1]} },
}

const Modal: React.FC<ModalProps> = ({ modal, projects }) => {
    const { isActive, project } = modal;
    const container = useRef<HTMLDivElement>(null);
    const cursor = useRef<HTMLDivElement>(null);

    useEffect( () => {
        let xMoveContainer = gsap.quickTo(container.current, "left", {duration: 0.8, ease: "power3"})
        let yMoveContainer = gsap.quickTo(container.current, "top", {duration: 0.8, ease: "power3"})
    
        let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})

        window.addEventListener('mousemove', (e) => {
          const { pageX, pageY } = e;
    
          xMoveContainer(pageX)
          yMoveContainer(pageY) 
          
          xMoveCursor(pageX)
          yMoveCursor(pageY)
        })
      }, [])

    return (
        <>
            <motion.div ref={container} className="absolute w-[300px] h-[400px] flex items-center justify-center overflow-hidden pointer-events-none" variants={ScaleVariants} initial="initial" animate={isActive? "open" : "close"}>
                <Image src={`/images/${projects[project].src}`} alt={projects[project].title} width={300} height={200} className="rotate-6"/>
            </motion.div>
            <motion.div ref={cursor} className="absolute flex items-center justify-center w-14 h-14 bg-[#455CE9] text-white rounded-[50%] pointer-events-none" variants={ScaleVariants} initial="initial" animate={isActive? "open" : "close"}><GoArrowUpRight style={{ fontSize: 32}}/></motion.div>
        </>
    )
}

export default Modal;