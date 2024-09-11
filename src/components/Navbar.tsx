"use client";
import React, { useState } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// import Project from "./../Project/Project";
interface MyComponentProps {
  children: React.ReactNode;
}
const Navbar: React.FC<MyComponentProps> = ({ children }) => {
  const [show, setShow] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const handleShow = () => {
    setShow(!show);
  };
  const handleMobile = () => {
    setMobile(!Mobile);
  };

  return (
    <div>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          backgroundColor: "#212A3E",
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "3px",
          boxShadow: " 4px 4px 8px 2px rgba(0, 0, 0, 0.2)",
        }}
      />
      <div className="container-size text-[#080202] flex items-center justify-between mt-4 ">
        <div className="uppercase cursor-pointer select-none text-base group relative overflow-hidden leading-6 ">
          <h1 className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
            <span className="border-b border-opacity-30 border-[#080202]">
              sa
            </span>
            meer
          </h1>
          <h1 className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
            <span className="border-b border-opacity-30 border-[#080202]">
              sa
            </span>
            meer
          </h1>
        </div>
        <div>
          <AnimatePresence>
            {show && (
              <motion.ul className="hidden lg:flex  items-center text-base gap-10 uppercase  cursor-pointer select-none">
                <motion.li
                  initial={{
                    opacity: 0,
                    y: -30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.5,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                >
                  <div className="group relative overflow-hidden leading-6">
                    <Link
                      className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]"
                      href="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0"
                      href="/"
                    >
                      Home
                    </Link>
                  </div>
                </motion.li>
                <motion.li
                  initial={{
                    opacity: 0,
                    y: -30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                >
                  <div className="group relative overflow-hidden leading-6">
                    <Link
                      className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]"
                      href="/projects"
                    >
                      Project
                    </Link>
                    <Link
                      className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0"
                      href="/projects"
                    >
                      Project
                    </Link>
                  </div>
                </motion.li>
                <motion.li
                  initial={{
                    opacity: 0,
                    y: -30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.9,
                    duration: 0.5,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                >
                  <div className="group relative overflow-hidden leading-6">
                    <Link
                      className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]"
                      href="/contact"
                    >
                      contact
                    </Link>
                    <Link
                      className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0"
                      href="/contact"
                    >
                      contact
                    </Link>
                  </div>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          layout
          className="hidden lg:flex bg-[#080202] text-white px-6 py-[6px] rounded-full"
        >
          {show ? (
            <AnimatePresence>
              <motion.div
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                initial={{
                  opacity: 0,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 1.5,
                  },
                }}
                onClick={handleShow}
                className="uppercase  cursor-pointer select-none text-base"
              >
                close-
              </motion.div>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <motion.div
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                initial={{
                  opacity: 0,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 1.5,
                  },
                }}
                onClick={handleShow}
                className="uppercase  cursor-pointer select-none text-base "
              >
                MENU+
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
        {/* //mobile responsive */}
        <div className="flex lg:hidden relative " onClick={handleMobile}>
          <button>Menu</button>
        </div>
        <AnimatePresence>
          {Mobile ? (
            <AnimatePresence>
              <motion.div
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0,
                  duration: 0.5,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="absolute top-[55px] left-0 lg:hidden px-2  w-full"
              >
                <>
                  <motion.ul className="flex items-center bg-black  rounded-md text-sm justify-between px-3 py-1 text-white  gap-5 uppercase font-thin cursor-pointer select-none">
                    <motion.li
                      initial={{
                        opacity: 0,
                        y: -30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.3,
                        duration: 0.5,
                      }}
                      exit={{
                        opacity: 0,
                        y: -30,
                      }}
                    >
                      <Link href="/">Home</Link>
                    </motion.li>
                    <motion.li
                      initial={{
                        opacity: 0,
                        y: -30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.6,
                        duration: 0.5,
                      }}
                      exit={{
                        opacity: 0,
                        y: -30,
                      }}
                    >
                      <Link href="/projects">Projects</Link>
                    </motion.li>
                    <motion.li
                      initial={{
                        opacity: 0,
                        y: -30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.9,
                        duration: 0.5,
                      }}
                      exit={{
                        opacity: 0,
                        y: -30,
                      }}
                    >
                      <Link href="/contact">contact</Link>
                    </motion.li>
                  </motion.ul>
                </>
              </motion.div>
            </AnimatePresence>
          ) : (
            <></>
          )}
        </AnimatePresence>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Navbar;
