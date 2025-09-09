"use client";

import React, { Dispatch, SetStateAction } from "react";
import { ModalTyping, ProjectTyping } from "../typings";
import Modal from "./Modal";
import Project from "./Project";

interface ProjectsProps {
  modal: ModalTyping;
  setModal: Dispatch<SetStateAction<ModalTyping>>;
}

const Projects: React.FC<ProjectsProps> = ({ modal, setModal }) => {
  const projects: ProjectTyping[] = [
    {
      title: "WeConnect",
      src: "chat-app.jpg",
      href: "https://github.com/dagm1425/chat-app",
    },
    {
      title: "Shopping Cart",
      src: "shopping-cart.jpg",
      href: "https://github.com/dagm1425/shopping-cart",
    },
    {
      title: "Asaita Properties",
      src: "asaita-properties.jpg",
      href: "https://github.com/dagm1425/commercial-project",
    },
    {
      title: "Portfolio Website",
      src: "portfolio-website.jpg",
      href: "https://github.com/dagm1425/portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="flex items-center justify-center pb-28 md:pb-0 xl:pt-[6.5rem]"
    >
      <div className="flex flex-col md:max-xl:flex-row w-5/6 xl:w-4/6 items-center justify-center md:max-xl:justify-start overflow-x-auto">
        {projects.map((project, i) => {
          return (
            <Project key={i} index={i} project={project} setModal={setModal} />
          );
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </section>
  );
};

export default Projects;
