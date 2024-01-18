import React from "react";
import Blob from "./Blob";
import { motion } from "framer-motion";
import styled from "styled-components";

const Hero = () => {
    const titleVariants = {
        hidden: {
            y: "30vh",
            opacity: 0
        },
        show: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [.215,.61,.355,1],
                delay: 7 + (i * 0.05), 
            }
        }),
    };

    const subtitleVariants = {
        hidden: {
            y: 45,
            opacity: 0
        },
        show: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [.215,.61,.355,1],
                delay: 7 + 0.65 + (i * 0.2), 
            }
        }),
    };

    const scrollContainerVariants = {
        animate: {
            opacity: 0,
            transition: {
                duration: .2,
                delay: 30,
            }
        }
    };

    return (
        <>
            <Blob />
            <motion.div className="absolute top-32 left-40">
                <motion.h1 variants={titleVariants} initial="hidden" animate="show" custom={1} className="text-white text-6xl uppercase font-bold">dagmawi</motion.h1>
                <motion.h1 variants={titleVariants} initial="hidden" animate="show" custom={2} className="text-white text-6xl uppercase font-bold">nebeyu</motion.h1>
            </motion.div>
            <motion.div className="absolute bottom-32 right-40">
                <motion.p variants={subtitleVariants} initial="hidden" animate="show" custom={1} className="text-3xl text-white uppercase font-semibold">front-end</motion.p>
                <motion.p variants={subtitleVariants} initial="hidden" animate="show" custom={2} className="text-3xl text-white uppercase font-semibold">developer</motion.p>
            </motion.div>
            <motion.div variants={scrollContainerVariants} animate="animate" className="absolute bottom-8 translate-x-[50%] left-[50%] w-8 h-14 grid place-items-center pb-4 border-2 border-solid border-white rounded-[25px]">
                <StyledDiv />
            </motion.div>
        </>
    )
}

const StyledDiv = styled.div`
    width: 2px;
    height: 12px;
    background: #fff;
    animation: scrollDown 1.5s ease 20;

    @keyframes scrollDown {
        0%{
            transform-origin: top;
            transform: scaleY(0);
        }
        45%{
            transform-origin: top;
            transform: scaleY(1);
        }
        55%{
            transform-origin: bottom;
            transform: scaleY(1);
        }
        100%{
            transform-origin: bottom;
            transform: scaleY(0);
        }   
    }
`;

export default Hero;