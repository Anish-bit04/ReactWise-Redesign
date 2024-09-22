import React from "react";
import logo from "../assets/logo2.svg";
import { address, followIcon, copyright } from "../constants";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-14 text-gray-400 mt-20">
      {/* Address Section */}
      <div className="address flex flex-col gap-4">
        <div className="flex items-center mb-10">
          <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
          <span className="text-xl tracking-tight">ReactWise</span>
        </div>
        <div className="flex flex-col gap-4">
          {address.map((value, index) => (
            <a href="#" key={index}>
              {value}
            </a>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter flex flex-col gap-6">
        <div className="text-2xl">Subscribe to Our Newsletter</div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <label className="text-xl">Email*</label>
          <input
            type="text"
            className="border border-gray-700 h-14 rounded-xl"
          />
          <div>
            <button className="border border-gray-700 rounded-xl text-lg p-4">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Policy Section */}
      <div className="policy flex flex-col gap-14">
        <div className="follow">
          <div>Follow Us On:</div>
          <div className="flex gap-4 mt-4">
            {followIcon.map((value, index) => (
              <img
                src={value}
                alt="Logo"
                key={index}
                className="h-10 bg-slate-400"
              />
            ))}
          </div>
        </div>
        <div className="copyright flex flex-col gap-4">
          {copyright.map((value, index) => (
            <span key={index}>{value}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
