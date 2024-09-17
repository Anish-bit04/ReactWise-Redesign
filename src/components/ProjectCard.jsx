import React from "react";
import Tilt from "react-parallax-tilt";


const ProjectCard = () => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="7px"
      className="h-fit"
    >
        
      <div className="overflow-hidden border  dark:border-0 rounded-lg dark:bg-zinc-900">
        <a href={`/projects/${id}`}>
          <image
            className="object-cover md:h-[180px]"
            src={image}
            alt={title}
          />
        </a>

        <div className="p-4">
          <div className="flex justify-between items-center">
            <a href={`/projects/${id}`}>
              <h3 className="text-xl font-bold my-3 hover:text-violet-500 ">
                {title}
              </h3>
            </a>
            {url && (
              <a
                className="rounded bg-green-100  text-green-800 text-xs font-bold me-2 px-2.5 py-0.5 dark:bg-green-900 dark:text-green-300"
                href={url}
                target="_blank"
              >
                Live
              </a>
            )}
          </div>

          <p className="opacity-80">{description}</p>

          <div className="flex justify-between items-center mt-3 gap-1">
            <div className="flex gap-2">
              {tech.map((t, i) => (
                <div
                  key={i}
                  className="  p-2 px-2 dark:bg-zinc-800 bg-zinc-100 rounded-md w-fit"
                >
                  <image
                    className="rounded-sm"
                    width={20}
                    height={20}
                    key={i}
                    src={t}
                    alt={i + ""}
                  />
                </div>
              ))}
            </div>
         
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectCard;
