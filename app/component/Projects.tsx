"use client";

import React, { Dispatch, SetStateAction } from "react";
import { ModalTyping, ProjectTyping } from "../typings";
import Modal from "./Modal"
import Project from "./Project"

interface ProjectsProps {
  modal: ModalTyping
  setModal: Dispatch<SetStateAction<ModalTyping>>
}

const Projects: React.FC<ProjectsProps> = ({ modal, setModal }) => {    
  const projects: ProjectTyping[] = [
    {
      title: 'ChatApp',
      src: "chat-app.jpg",
    },
    {
      title: 'Shopping Cart',
      src: "shopping-cart.jpg",
    },
    {
      title: 'Commercial Project',
      src: "commercial-project.jpg",
    },
    {
      title: 'Portfolio Website',
      src: "portfolio-website.jpg",
    },
  ];

    return (
      <section className="h-[85vh] flex items-center justify-center">
        <div className="flex flex-col w-[1000px] items-center justify-center">
          {
            projects.map((project, i) => {
              const isLast = i === projects.length - 1;
              return <Project key={i} index={i} title={project.title} setModal={setModal} isLast={isLast}/>
            })
          }
        </div>
        <Modal modal={modal} projects={projects}/>
      </section>
    )
}

export default Projects;
