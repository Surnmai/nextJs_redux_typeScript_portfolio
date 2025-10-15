import React from "react";

// import components
import ResumeCard from "./ResumeCard";
import { resume } from "@/constants/data";

const Resume = () => {
  return (
    <>
      <section className="section container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Work Part  */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              My work <span className="text-cyan-200">experience</span>
            </h1>
            {resume.slice(0, 3).map((resum, idx) => (
              <ResumeCard key={idx} {...resum} />
            ))}
          </div>

          {/* Education Part  */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              My <span className="text-cyan-200">Education</span>
            </h1>

            {resume.slice(3).map((resum, idx) => (
              <ResumeCard key={idx} {...resum} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
