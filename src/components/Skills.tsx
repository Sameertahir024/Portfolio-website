const Skills = () => {
  type image = {
    id: string;
    logo: string;
    tittle: string;
  };
  const images = [
    {
      id: "1",
      logo: "/javascript.png",
      tittle: "javascript",
    },
    {
      id: "2  ",
      logo: "/javascript.png",
      tittle: "typescript",
    },
    {
      id: "3",
      logo: "/react.png",
      tittle: "reactjs",
    },
    {
      id: "4",
      logo: "/nextjs.png",
      tittle: "nextjs",
    },
    {
      id: "5",
      logo: "/node.png",
      tittle: "nodejs",
    },

    {
      id: "6",
      logo: "/mongo.png",
      tittle: "express",
    },
    {
      id: "7",
      logo: "/mongo.png",
      tittle: "mongodb",
    },
    {
      id: "8",
      logo: "/mongo.png",
      tittle: "React Native",
    },
    {
      id: "9",
      logo: "/mongo.png",
      tittle: "SQL",
    },
    {
      id: "10",
      logo: "/github1.png",
      tittle: "github",
    },

    {
      id: "11",
      logo: "/tailwind.png",
      tittle: "tailwind",
    },
    {
      id: "12",
      logo: "/tailwind.png",
      tittle: "vscode",
    },
    {
      id: "13",
      logo: "/tailwind.png",
      tittle: "firebase",
    },
    {
      id: "13",
      logo: "/tailwind.png",
      tittle: "Prisma",
    },
    {
      id: "13",
      logo: "/tailwind.png",
      tittle: "redis",
    },

    // Add more image URLs as needed
  ];

  return (
    <div>
      <div className="container-size md:h-screen my-10 md:my-0 flex flex-col justify-center items-center md:items-start ">
        {/* <p className="border-2 border-opacity-60 border-black text-base w-fit rounded-full  py-2 px-4 uppercase">
          <div className="uppercase cursor-pointer select-none text-base group relative overflow-hidden leading-6 ">
            <h1 className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
              my Skills
            </h1>
            <h1 className="absolute left-0 inline-block translate-y-[150%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
              my Skills
            </h1>
          </div>
        </p> */}
        <div className=" mt-14">
          <h1 className="text-center w-full md:w-4/5 mx-auto  text-xl lg:text-2xl">
            I have honed my skills to encompass the entire development stack.
            Proficient in technologies such as React and Node.js, I thrive on
            turning innovative ideas into robust, scalable solutions. Beyond
            coding, I am a lifelong learner who embraces challenges and stays
            updated with the latest industry trends.
          </h1>
        </div>

        <div className="flex md:w-2/3 px-5 mx-auto items-center justify-center flex-wrap gap-5 mt-16">
          {images.map((image: image, index) => (
            <div
              key={index}
              className=" border-2 border-opacity-60 border-black hover:bg-black hover:bg-opacity-90 hover:text-white py-2 px-10 rounded-2xl"
            >
              <div key={index} className="text-center ">
                <h3 className="text-center text-base opacity-50 uppercase cursor-pointer">
                  {image.tittle}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
