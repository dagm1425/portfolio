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
      href: "https://github.com/dagm1425/chat-app"
    },
    {
      title: 'Shopping Cart',
      src: "shopping-cart.jpg",
      href: "https://github.com/dagm1425/shopping-cart"
    },
    {
      title: 'Commercial Project',
      src: "commercial-project.jpg",
      href: ""
    },
    {
      title: 'Portfolio Website',
      src: "portfolio-website.jpg",
      href: "https://github.com/dagm1425/portfolio"
    },
  ];

    return (
      <section className="flex items-center justify-center">
        <div className="flex flex-col w-5/6 lg:w-4/6 items-center justify-center">
          {
            projects.map((project, i) => {
              const isLast = i === projects.length - 1;
              return <Project key={i} index={i} project={project} setModal={setModal} isLast={isLast}/>
            })
          }
        </div>
        <Modal modal={modal} projects={projects}/>
      </section>
    )
}

export default Projects;
