import React, { useEffect, useState } from "react";
import Blob from "./Blob";
import { animate, motion, useMotionValue } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import { PiGlobeLight } from "react-icons/pi";

const Hero = () => {
    const [isBlobLoading, setIsBlobLoading] = useState<boolean>(true);
    const zIndex = useMotionValue(30);

    useEffect(() => {
        if(!isBlobLoading) {
            animate(zIndex, -10, { delay: 1.2 });
        }
    }, [isBlobLoading, zIndex]);

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
                delay: 1.2 + (i * 0.05), 
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
                delay: 1.6 + (i * 0.2), 
            }
        }),
    };

    const subtitleVariants2 = {
        hidden: {
            x: "-100%",
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [.215,.61,.355,1],
                delay: 2.3
            }
        }
    };

    const blinderVariants = {
        initial: {
            scaleY: 1
        },
        animate: (i: number) => ({
            scaleY: 0,
            transition: {
                duration: 0.7,
                ease: [.215,.61,.355,1],
                delay: i * 0.07, 
            }
        }),
    };

    const loaderTextVariants = {
        initial: {
            y: -84
        },
        animate: {
            y: 0,
            transition: {
                duration: 1,
                repeat: Infinity,
            }
        }
    }

    const loaderContainerVariants = {
        initial: {
            opacity: 1,
            x: "-50%",
            y: "-50%"
        },
        animate: {
            opacity: 0,
            x: "-50%",
            y: "-50%",
        }
    }

    return (
        <>
            <Blob setIsBlobLoading={setIsBlobLoading}/>
            <motion.div className="absolute bottom-0 w-full flex justify-center -z-10">
                <motion.h1 variants={titleVariants} initial="hidden" animate={!isBlobLoading ? "show" : "hidden"} custom={1} className="font-teko text-white text-[10rem] font-semibold uppercase">dagmawi nebeyu</motion.h1>
            </motion.div>
            <motion.div className="absolute top-64 right-64 flex flex-col gap-2 flex-start -z-10">
                <GoArrowDownRight style={{ color: "white", fontSize: "2rem", marginBottom: "1rem" }} />
                <motion.p variants={subtitleVariants} initial="hidden" animate={!isBlobLoading ? "show" : "hidden"} custom={1} className="text-3xl text-white uppercase font-normal">front-end</motion.p>
                <motion.p variants={subtitleVariants} initial="hidden" animate={!isBlobLoading ? "show" : "hidden"} custom={2} className="text-3xl text-white uppercase font-normal">developer</motion.p>
            </motion.div>
            <motion.div variants={subtitleVariants2} initial="hidden" animate={!isBlobLoading ? "show" : "hidden"} className="absolute bottom-64 left-24 flex items-center gap-6 text-white uppercase -z-10">
                <div>
                    <p className="text-3xl">working<br/>worldwide</p>
                </div>
                <PiGlobeLight style={{ fontSize: "2.5rem" }} />
            </motion.div>
            <motion.div className={`absolute top-0 left-0 w-full h-screen flex`} style={{zIndex}}>
                <motion.div variants={blinderVariants} custom={1} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-slate-400 origin-top"></motion.div>
                <motion.div variants={blinderVariants} custom={2} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-slate-400 origin-top"></motion.div>
                <motion.div variants={blinderVariants} custom={3} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-slate-400 origin-top"></motion.div>
                <motion.div variants={blinderVariants} custom={4} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-slate-400 origin-top"></motion.div>
                <motion.div variants={blinderVariants} custom={5} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-slate-400 origin-top"></motion.div>
                <motion.div variants={blinderVariants} custom={6} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-slate-400 origin-top"></motion.div>
                <motion.div variants={blinderVariants} custom={7} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-slate-400 origin-top"></motion.div>
                <motion.div variants={blinderVariants} custom={8} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-slate-400 origin-top"></motion.div>
                <motion.div variants={blinderVariants} custom={9} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-slate-400 origin-top"></motion.div>
                <motion.div variants={blinderVariants} custom={10} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-slate-400 origin-top"></motion.div>
            </motion.div>
            <motion.div variants={loaderContainerVariants} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="absolute top-1/2 left-1/2 h-[84px] text-8xl uppercase overflow-hidden z-30">
                <motion.h1 variants={loaderTextVariants} initial="initial" animate="animate" className="font-teko leading-[.85]">d.n</motion.h1>
                <motion.h1 variants={loaderTextVariants} initial="initial" animate="animate" className="font-teko leading-[.85]">d.n</motion.h1>
            </motion.div> 
        </>
    )
}

export default Hero;