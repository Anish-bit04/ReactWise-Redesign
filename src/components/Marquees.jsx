import React from "react";
import { partnerLogos } from "../constants/index";

const Marquees = () => {
  const logos = [...partnerLogos, ...partnerLogos];

  return (
    <div>
      <h1 className="text-3xl font-medium sm:text-5xl lg:text-6xl text-center mt-16 tracking-wide mb-10">
        Our{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Partners
        </span>
      </h1>
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee flex whitespace-nowrap">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="h-20 mx-4"
              src={logo}
              alt={`Partner logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquees;
