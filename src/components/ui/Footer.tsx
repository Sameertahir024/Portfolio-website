"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="">
      <div className="md:flex space-y-3  flex-wrap items-center justify-between mt-32 mb-3 border-t-2 border-black border-opacity-60">
        <div className="w-full md:w-1/2 space-y-2  ">
          <h1 className="capitalize mt-3 opacity-30">local time</h1>
          <p className="p-4 bg-[#080202] text-white w-fit">
            {currentTime.toLocaleTimeString("en-PK")}
          </p>
        </div>

        <ul className="w-full md:w-1/2 flex md:justify-end gap-6 cursor-pointer ">
          <a
            className="hover:border-b-2 border-black border-opacity-60"
            href="https://github.com/Sameertahir024"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sameer-tahir-254253230/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-2 border-black border-opacity-60"
          >
            Linkedin
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01d5ed0eca04f66ba0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-b-2 border-black border-opacity-60"
          >
            UpWork
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
