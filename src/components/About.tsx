import React from "react";
import Image from "next/image";
import image1 from "../assets/ai-startup-landing-page.png";
import image2 from "../assets/dark-saas-landing-page.png";
import image3 from "../assets/light-saas-landing-page.png";
import image4 from "../assets/check-circle.svg";
import ShinyButton from "./magicui/shiny-button";
import { FaRegCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div className=" mt-11 bg-[#080202] rounded-[7px] mx-7  sticky top-6    ">
        <div className="grid md:grid-cols-2">
          <div className="text-white flex flex-col items-start pl-16 justify-center ">
            <div className="space-y-3">
              <h3 className="font-bold">ACME CORP . 2020</h3>
              <h1 className="text-5xl mt-3 font-bold playfair-display leading-[60px]">
                AI SAAS LANDING <br /> PAGE
              </h1>
              <hr className="opacity-50" />
              <div className="py-4 space-y-4 opacity-50">
                <h2 className="flex items-center gap-1 ">
                  <span>
                    <FaRegCheckCircle color="white" />
                  </span>
                  Enhance user experience.{" "}
                </h2>
                <h2 className="flex items-center gap-1 ">
                  {" "}
                  <span>
                    <FaRegCheckCircle color="white" />
                  </span>
                  Increase website speed.{" "}
                </h2>
                <h2 className="flex items-center gap-1 ">
                  {" "}
                  <span>
                    <FaRegCheckCircle color="white" />
                  </span>
                  Increase website traffic.
                </h2>
              </div>
              <div>
                <ShinyButton
                  text="See Preview"
                  className="rounded-[7px] mt-3 bg-white"
                />
              </div>
            </div>
          </div>
          <div>
            <Image src={image1} alt="" className="w-full mt-36 rounded-[7px]" />
          </div>
        </div>
      </div>
      <div className=" mt-11 bg-[#080202] rounded-[7px] mx-7  sticky top-16  border border-white   ">
        <div className="grid md:grid-cols-2">
          <div className="text-white flex flex-col items-start pl-16 justify-center ">
            <div className="space-y-3">
              <h3 className="font-bold">QUANTUM DYNAMIC. 2022</h3>
              <h1 className="text-5xl mt-3 font-bold playfair-display leading-[60px] uppercase">
                startup landing <br /> PAGE
              </h1>
              <hr className="opacity-50" />
              <div className="py-4 space-y-4 opacity-50">
                <h2 className="flex items-center gap-1 ">
                  <span>
                    <FaRegCheckCircle color="white" />
                  </span>
                  Enhance user experience.{" "}
                </h2>
                <h2 className="flex items-center gap-1 ">
                  {" "}
                  <span>
                    <FaRegCheckCircle color="white" />
                  </span>
                  Increase website speed.{" "}
                </h2>
                <h2 className="flex items-center gap-1 ">
                  {" "}
                  <span>
                    <FaRegCheckCircle color="white" />
                  </span>
                  Increase website traffic.
                </h2>
              </div>
              <div>
                <ShinyButton
                  text="See Preview"
                  className="rounded-[7px] mt-3 bg-white"
                />
              </div>
            </div>
          </div>
          <div>
            <Image src={image3} alt="" className="w-full mt-36 rounded-[7px]" />
          </div>
        </div>
      </div>
      <div className=" mt-11 bg-[#080202] rounded-[7px] mx-7   sticky top-20 border border-white  shadow-2xl ">
        <div className="grid  md:grid-cols-2">
          <div className="text-white flex flex-col items-start pl-16 justify-center ">
            <div className="space-y-3">
              <h3 className="font-bold">INNOVATIVE CO . 2024</h3>
              <h1 className="text-5xl mt-3 font-bold playfair-display leading-[60px]">
                DARK SAAS LANDING <br /> PAGE
              </h1>
              <hr className="opacity-50" />
              <div className="py-4 space-y-4 opacity-50">
                <h2 className="flex items-center gap-1 ">
                  <span>
                    <FaRegCheckCircle color="white" />
                  </span>
                  Enhance user experience.{" "}
                </h2>
                <h2 className="flex items-center gap-1 ">
                  {" "}
                  <span>
                    <FaRegCheckCircle color="white" />
                  </span>
                  Increase website speed.{" "}
                </h2>
                <h2 className="flex items-center gap-1 ">
                  {" "}
                  <span>
                    <FaRegCheckCircle color="white" />
                  </span>
                  Increase website traffic.
                </h2>
              </div>
              <div>
                <ShinyButton
                  text="See Preview"
                  className="rounded-[7px] mt-3 bg-white"
                />
              </div>
            </div>
          </div>
          <div>
            <Image src={image2} alt="" className="w-full mt-36 rounded-[7px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
