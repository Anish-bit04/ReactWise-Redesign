import React from "react";
import { publishList } from "../constants/index.jsx";


const Projects = () => {


  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-medium sm:text-5xl lg:text-6xl text-center mt-16 tracking-wide mb-10">Our{" "}
    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
    Publications 
        </span>
      
       </h1> 
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {publishList.map((doc) => (
        <div key={doc.id} className=" rounded-lg shadow-md overflow-hidden">
          <img src={doc.image} alt={doc.text} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{doc.text}</h3>
            <p className="text-gray-500 mb-4">{doc.description}</p>
            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded hover:bg-blue-600">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Projects;
