import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import ProjectCard from "./ProjectCard";


const ProjectGrid = ({projectList}) => {
  return (
  
    <div>
      <div >
        <AnimatedDiv ClassName="grid md:grid-cols-2 mt-3 lg:grid-cols-3 xl:grid-cols-4 md:p-0 gap-4 sm:gap-5">
          {projectList.map((p) => (
            <div>
              key={p.title}
              id={p.id}
              description={p.description}
              </div>
          ))}
        </AnimatedDiv>
      </div>
      </div>
  );
};

export default ProjectGrid;
