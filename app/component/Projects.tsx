"use client";

import { ProjectTyping } from "../typings";
import Project from "./Project"

const Projects = () => {    
    const projects: ProjectTyping[] = [
        {
          title: 'ChatApp',
          src: "chatapp.jpg",
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
              return <Project key={i} title={project.title} isLast={isLast}/>
            })
          }
        </div>
      </section>
    )
}

export default Projects;
