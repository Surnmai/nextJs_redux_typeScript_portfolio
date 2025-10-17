"use client";
import { skills } from "@/constants/data";
import React from "react";

// import tilt
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <>
      <section>
        <h1 className="text-white text-center text-2xl md:text-4xl xl:text-5xl font-bold">
          My <span className="text-cyan-300">Skills</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {skills.map((skill) => (
            <Tilt scale={1.5} transitionSpeed={400} key={skill.name}>
              <div>
                <div className="bg-skillBg text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105">
                  <div className="text-5xl mb-4 text-gray-300">
                    <skill.Icon />
                  </div>
                  <p className="text-white text-2xl font-semibold">
                    {skill.percentage}%
                  </p>
                  <p className="text-purple-400 mt-1">{skill.name}</p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
