import { projects } from "@/constants/data";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <>
      <section>
        {/* title  */}
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
          A small selection of recent <br />
          <span className="text-cyan-300">projects</span>
        </h1>

        {/* image container  */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {projects.map((project, idx) => (
            <div key={idx}>
              <Image
                src={project.img}
                alt="img"
                width={800}
                height={650}
                className="rounded-lg hover:brightness-50 transition-all duration-300 delay-200"
              />
              <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                {project.title}
              </h1>
              <h1 className="pt-2 font-medium text-white/80">
                {project.subtext}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
