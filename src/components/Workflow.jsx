import React from 'react';
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">    
        Ready to Optimize Your Chemistry {" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          with ReactWise?
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-3xl" style={{ aspectRatio: '4 / 3' }}>
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-full h-full object-cover border border-orange-700 shadow-sm shadow-orange-400"
            >
              <source src="https://v.ftcdn.net/00/38/81/98/700_F_38819884_sDeMT3UC5CVzmTD3ZhoGRwTnxWuQR6N9_ST.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;