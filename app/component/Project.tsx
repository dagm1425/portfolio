"use client";

import React from "react";

interface ProjectProps {
    title: string,
    isLast: boolean,
}

const Project: React.FC<ProjectProps> = ({ title, isLast }) => {   
    return (
        <div className={`group flex w-full items-center justify-between text-white py-12 px-24 border-t border-solid border-slate-500 cursor-pointer ${isLast ? 'border-b border-solid border-slate-500' : ''}`}>
            <h2 className="text-3xl font-normal m-0 group-hover:opacity-40 group-hover:-translate-x-2.5 transition duration-200 ease-linear">{title}</h2>
            <p className="group-hover:opacity-40 group-hover:translate-x-2.5 transition duration-200 ease-linear">Design & Development</p>
        </div>
    )
}

export default Project;