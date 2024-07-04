"use client";

import React, { Dispatch, SetStateAction } from "react";
import { ModalTyping, ProjectTyping } from "../typings";
import Image from "next/image";
import useViewportWidth from "../lib/useViewportWidth";

interface ProjectProps {
  project: ProjectTyping;
  index: number;
  setModal: Dispatch<SetStateAction<ModalTyping>>;
}

const Project: React.FC<ProjectProps> = ({ project, index, setModal }) => {
  const title = project.title;
  const href = project.href;
  const src = project.src;
  const width = useViewportWidth();
  const isDesktop = width > 1024;

  return (
    <a
      href={href}
      target="_blank"
      className={`group flex flex-col flex-none xl:flex-row w-full md:max-xl:w-8/12 xl:items-center justify-between text-white py-12 px-4 sm:py-14 xl:px-24 border-t border-solid border-slate-500 cursor-pointer last:border-b last:border-solid last:border-slate-500 md:max-xl:border-none md:max-xl:last:border-none`}
      onMouseEnter={() => setModal({ isActive: true, index })}
      onMouseLeave={() => setModal({ isActive: false, index })}
    >
      {!isDesktop && (
        <Image
          src={`/images/${src}`}
          alt={title}
          width={500}
          height={400}
          className="mb-6"
          unoptimized
        />
      )}
      <h2 className="text-3xl font-normal mb-1 lg:mb-0 group-hover:opacity-40 group-hover:-translate-x-2.5 transition duration-200 ease-linear">
        {title}
      </h2>
      <p className="xl:max-w-[40%] group-hover:opacity-40 group-hover:translate-x-2.5 xl:text-right transition duration-200 ease-linear">
        Design & Development
      </p>
    </a>
  );
};

export default Project;
