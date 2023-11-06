import React from "react";
import main_img from "../assets/Left.png"
import arrow from "../assets/Down arrow.png"
import logo from "../assets/image 1.png"
import "../App.css";

export const Header = () => {
  return (
    <>
      <section className="Landingpage">
        <div className="Header flex place-content-between">
          <div className="Left flex items-center ">
            <img className="mr-5" src={logo} alt="" />
            <div className="flex items-center mx-5">
              <h6 className="text-lg font-extrabold leading-7 font-Poppins">
                Solutions
              </h6>
              <img src={arrow} alt="" />
            </div>
            <div className="flex items-center mx-5">
              <h6 className="text-lg font-extrabold leading-7 font-Poppins">
                Features
              </h6>
              <img src={arrow} alt="" />
            </div>
            <div className="flex items-center mx-5">
              <h6 className="text-lg font-extrabold leading-7 font-Poppins">
                Blogs
              </h6>
              <img src={arrow} alt="" />
            </div>
            <div className="flex items-center mx-5">
              <h6 className="text-lg font-extrabold leading-7 font-Poppins">
                About
              </h6>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="Right space-x-3 ">
            <button className=" text-lg font-thin leading-7 font-Poppins px-7 py-2 rounded-xl border-blue-600 border-2">
              Login
            </button>
            <button className=" text-lg font-thin leading-7 font-Poppins px-5 py-2.5 rounded-xl bg-[#0076CE] text-white">
              Register
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
