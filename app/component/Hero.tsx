"use client";

import React, { Dispatch, SetStateAction, useEffect } from "react";
import Blob from "./Blob";
import { animate, motion, useMotionValue } from "framer-motion";
import { GoArrowDownRight } from "react-icons/go";
import { PiGlobeLight } from "react-icons/pi";

interface HeroProps {
    isBlobLoading: boolean,
    setIsBlobLoading: Dispatch<SetStateAction<boolean>>,
}

const Hero: React.FC<HeroProps> = ({ isBlobLoading, setIsBlobLoading }) => {
    const zIndex = useMotionValue(30);
    const blindersArr = Array.from(Array(10).keys());

    useEffect(() => {
        if(!isBlobLoading) {
            animate(zIndex, -10, { delay: 1.2 });
        }
    }, [isBlobLoading, zIndex]);

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
                duration: 0.65,
                ease: [.215,.61,.355,1],
                delay: 1.2, 
            }
        },
    };

    // const titleVariants = {
    //     hidden: {
    //         y: "30vh",
    //         opacity: 0
    //     },
    //     show: (i: number) => ({
    //         y: 0,
    //         opacity: 1,
    //         transition: {
    //             duration: 0.5,
    //             ease: [.215,.61,.355,1],
    //             delay: 1.2 + (i * 0.05), 
    //         }
    //     }),
    // };

    const subtitleVariants = {
        initial: {
            y: 45,
            opacity: 0
        },
        animate: (i: number) => ({
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
        initial: {
            y: -45,
            opacity: 0
        },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [.215,.61,.355,1],
                delay: 2.3 + (i * 0.2), 
            }
        }),
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
        <section id="home" className="h-[55vh] lg:h-auto">
            <Blob setIsBlobLoading={setIsBlobLoading}/>
            <div className="absolute bottom-[40%] sm:bottom-[45%] lg:bottom-2 w-full sm:-z-10 perspective-[120px] perspective-origin-bottom overflow-hidden">
                <motion.div variants={titleVariants} initial="initial" animate={!isBlobLoading ? "animate" : "initial"}>
                    <h1 className="font-teko text-left text-white text-6xl sm:text-9xl font-semibold uppercase pl-4 sm:pl-28 leading-none">dagmawi</h1>
                </motion.div>
                <motion.div variants={titleVariants} initial="initial" animate={!isBlobLoading ? "animate" : "initial"}>
                    <h1 className="font-teko text-left sm:text-right lg:text-center text-white text-6xl sm:text-9xl font-semibold uppercase pl-4 sm:pr-28 lg:p-0 leading-none">nebeyu</h1>
                </motion.div>
            </div>
            <motion.div className="absolute top-[64%] sm:top-36 lg:top-52 sm:right-8 lg:right-64 w-full sm:w-auto flex justify-center sm:flex-col sm:flex-start gap-2 sm:-z-10">
                <motion.div variants={subtitleVariants} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} custom={1} className="w-fit bg-white bg-opacity-[0.12] mb-[1rem] p-2 rounded-[50%]">
                    <GoArrowDownRight className="text-white text-[2rem]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}/>
                </motion.div>
                <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                    <motion.p variants={subtitleVariants} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} custom={2} className="text-2xl sm:text-3xl text-white uppercase font-normal">front-end</motion.p>
                </div>
                <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                    <motion.p variants={subtitleVariants} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} custom={3} className="text-2xl sm:text-3xl text-white uppercase font-normal">developer</motion.p>
                </div>
            </motion.div>
            <motion.div className="absolute bottom-[41%] sm:bottom-[70%] lg:bottom-80 right-4 sm:right-auto sm:left-8 lg:left-32 flex justify-center items-center gap-2 sm:gap-3 lg:gap-8 text-white uppercase sm:-z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                <div>
                    <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                        <motion.p variants={subtitleVariants2} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} custom={2} className="text-sm sm:text-3xl sm:mb-2">working</motion.p>
                    </div>
                    <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}>
                        <motion.p variants={subtitleVariants2} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} custom={3} className="text-sm sm:text-3xl">worldwide</motion.p>
                    </div>
                </div>
                <motion.div variants={subtitleVariants2} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} custom={1} className="w-fit bg-white bg-opacity-[0.12] mb-[1rem] p-2 rounded-[50%]">
                    <PiGlobeLight className="text-[2.5rem]" />
                </motion.div>
            </motion.div>
            <motion.div className={`absolute top-0 left-0 w-full h-screen flex`} style={{zIndex}}>
                {
                    blindersArr.map(i => {
                        return (
                            <motion.div key={i} variants={blinderVariants} custom={i + 1} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="h-screen w-[10vw] bg-[#797986] origin-top"></motion.div>
                        )
                    })
                }
            </motion.div>
            <motion.div variants={loaderContainerVariants} initial="initial" animate={!isBlobLoading ? "animate" : "initial"} className="absolute top-1/2 left-1/2 h-[84px] text-8xl uppercase overflow-hidden z-30">
                <motion.h1 variants={loaderTextVariants} initial="initial" animate="animate" className="font-teko leading-[.85]">d.n</motion.h1>
                <motion.h1 variants={loaderTextVariants} initial="initial" animate="animate" className="font-teko leading-[.85]">d.n</motion.h1>
            </motion.div> 
        </section>
    )
}

export default Hero;