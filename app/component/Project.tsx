"use client";

import React, { Dispatch, SetStateAction } from "react";
import { ModalTyping, ProjectTyping } from "../typings";

interface ProjectProps {
    project: ProjectTyping,
    index: number,
    setModal: Dispatch<SetStateAction<ModalTyping>>,
    isLast: boolean,
}

const Project: React.FC<ProjectProps> = ({ project, index, setModal, isLast }) => {
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
   
    return (
        <a href={href} target="_blank" className={`group flex w-full items-center justify-between text-white py-12 px-4 sm:py-14 lg:px-24 border-t border-solid border-slate-500 cursor-pointer ${isLast ? 'border-b border-solid border-slate-500' : ''}`} onMouseEnter={() => setModal({isActive: true, project: index})} onMouseLeave={() => setModal({isActive: false, project: index})}>
            <h2 className="text-3xl font-normal group-hover:opacity-40 group-hover:-translate-x-2.5 transition duration-200 ease-linear">{title}</h2>
            <p className="max-w-[40%] group-hover:opacity-40 group-hover:translate-x-2.5 text-right transition duration-200 ease-linear">Design & Development</p>
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