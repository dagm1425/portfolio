"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ModalTyping, ProjectTyping } from "../typings";
import Image from "next/image";

interface ProjectProps {
    project: ProjectTyping,
    index: number,
    setModal: Dispatch<SetStateAction<ModalTyping>>,
}

const Project: React.FC<ProjectProps> = ({ project, index, setModal }) => {
    // const [isActive, setIsActive] = useState<boolean>(false);

    // const imgContainerVariants = {
    //     initial: {
    //         width: 0
    //     },
    //     open: {
    //         width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}
    //     },
    //     closed: {
    //         width: 0
    //     }
    // }
    const title = project.title;
    const href = project.href;
    const src = project.src;
    const [isDesktop, setIsDesktop] = useState<Boolean>(true);

    useEffect( () => {    
        const resize = () => {
            setIsDesktop(window.innerWidth > 1024)
        }
    
        window.addEventListener("resize", resize)
        resize();
    
        return () => {
          window.removeEventListener("resize", resize);
        }
      }, [])

    return (
        <a href={href} target="_blank" className={`group flex flex-col flex-none xl:flex-row w-full md:max-xl:w-8/12 xl:items-center justify-between text-white py-12 px-4 sm:py-14 xl:px-24 border-t border-solid border-slate-500 cursor-pointer last:border-b last:border-solid last:border-slate-500 md:max-xl:border-none md:max-xl:last:border-none`} onMouseEnter={() => setModal({isActive: true, project: index})} onMouseLeave={() => setModal({isActive: false, project: index})}>
            {!isDesktop && <Image src={`/images/${src}`} alt={title} width={500} height={400} className="mb-6"/>}
            <h2 className="text-3xl font-normal mb-1 lg:mb-0 group-hover:opacity-40 group-hover:-translate-x-2.5 transition duration-200 ease-linear">{title}</h2>
            <p className="xl:max-w-[40%] group-hover:opacity-40 group-hover:translate-x-2.5 xl:text-right transition duration-200 ease-linear">Design & Development</p>
        </a>
        // <div className={`w-full flex items-center justify-center py-[0.8vw] cursor-pointer border-t-2 border-solid border-slate-600 ${isLast ? 'border-b-2 border-solid border-slate-600' : ''}`} onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}}>
        //     <p className="text-[5vw] m-0 mr-[0.75vw]">{title1}</p>
        //     <motion.div variants={imgContainerVariants} animate={isActive ? "open" : "closed"} className="w-0 flex justify-center overflow-hidden">
        //         <Image src={`/images/${src}`} alt={title1.concat(title2)} width={427} height={640} className="w-[10vw]"></Image>
        //     </motion.div>
        //     <p className="text-[5vw] m-0 ml-[0.75vw]">{title2}</p>
        // </div>
    )
}

export default Project;