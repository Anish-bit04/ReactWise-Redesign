import React from "react";
import { footerItems } from "../constants";

const Footer = () => {

  return (
    <div className="mt-8 mb-4 text-zinc-600 py-5">
      <div className=" max-w-screen-xl mx-auto flex items-center justify-between">
      <div className="flex gap-10 ">
        {footerItems.map((item, index) => (
          <a href="#" key={index} className="text-sm">
            {item}
          </a>
        ))}
      </div>
      <div>
        Developed with ❤️‍🔥 by Anish
      </div>
      </div>
    </div>
  );
};

export default Footer;