"use client";
import { motion } from "framer-motion";

import RetroGrid from "@/components/magicui/retro-grid";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <RetroGrid className="text-[#080202] " />
      <div className="container-size relative grid place-content-center overflow-hidden py-10 lg:py-0 lg:h-[calc(100vh-2.6rem)] ">
        <div className=" w-full  text-[#080202] ">
          <h1 className="font-mono font-thin">Hello, I’m Muhammad Sameer </h1>
          <motion.div
            className="cursor"
            // variants={variants}
            // animate={cursorVariant}
          />
          <motion.div
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            initial={{
              opacity: 0,
              x: -100,
            }}
            transition={{
              duration: 2,
            }}
          >
            <h1 className="select-none text-5xl md:text-8xl lg:text-[9rem] xl:text-[10rem] uppercase font-extrabold">
              full stack
            </h1>
          </motion.div>
          <motion.div
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            initial={{
              opacity: 0,

              x: 100,
            }}
            transition={{
              duration: 2,
            }}
          >
            <h1 className="flex select-none items-baseline text-5xl md:text-8xl lg:text-[9rem] xl:text-[10rem] uppercase font-extrabold md:ml-32">
              developer
              <motion.span
                style={{ transformOrigin: "center center" }}
                animate={{
                  rotate: 360, // Rotate 360 degrees (full circle)
                }}
                transition={{
                  duration: 4, // Adjust duration as needed
                  ease: "linear", // Use linear easing for a continuous rotation
                  repeat: Infinity, // Set repeat to Infinity for continuous looping
                }}
              >
                <Image
                  src="/flower.svg"
                  width={10}
                  height={10}
                  className="w-10 "
                  alt=""
                />
              </motion.span>
            </h1>
          </motion.div>
        </div>
        <div className="flex items-center overflow-hidden justify-between font-semibold text-base mt-10">
          <motion.div>
            <div>
              <div className="flex cursor-pointer items-center gap-2">
                <motion.h1
                  whileHover={{
                    opacity: 1,
                    borderBottom: "2px solid #000",
                  }}
                >
                  <div className="uppercase cursor-pointer select-none text-base group relative overflow-hidden leading-6 ">
                    <h1 className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
                      <a
                        href="https://www.upwork.com/freelancers/~01d5ed0eca04f66ba0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AVAILABLE FOR FREELANCE
                      </a>
                    </h1>
                    <h1 className="absolute left-0 inline-block translate-y-[150%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                      <a
                        href="https://www.upwork.com/freelancers/~01d5ed0eca04f66ba0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AVAILABLE FOR FREELANCE
                      </a>
                    </h1>
                  </div>
                </motion.h1>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-9 h-9 font-thin"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </motion.div>
          <div className="hidden md:flex items-center gap-5 uppercase ">
            <h1 className="">
              {" "}
              <div className="uppercase cursor-pointer select-none text-base group relative overflow-hidden leading-6 ">
                <h1 className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
                  scroll down
                </h1>
                <h1 className="absolute left-0 inline-block translate-y-[150%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                  scroll down
                </h1>
              </div>
            </h1>
            <div className=" cursor-pointer p-4 rounded-full border-2 border-[#080202] hover:bg-[#080202] duration-300  hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
