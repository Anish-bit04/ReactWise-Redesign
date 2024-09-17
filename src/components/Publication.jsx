import React from "react";
import { publishdoc } from "../constants/index.jsx";
import ProjectGrid from "./ProjectGrid.jsx";

const Projects = () => {


  return (
    <div className="relative">
      <h2 className="text-center font-bold text-sm text-[#FF8911] uppercase tracking-wider mb-6">
        Projects
      </h2>
      
      <div className="dark:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[300px] h-[50px] blur-3xl absolute z-[-999] right-[3rem] top-[8rem] opacity-80"></div>

      <ProjectGrid projectList={publishdoc} />

      <a href={"/projects"}>
        <button size={"sm"} className="mt-4" variant={"secondary"}>
          Show All
        </button>
      </a>
    </div>
  );
};

export default Projects;
