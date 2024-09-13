import { MagicCard } from "@/components/magicui/magic-card";
import Image, { StaticImageData } from "next/image";
import image1 from "../assets/folder/edit.png";
import image9 from "../assets/folder/form.png";
import image2 from "../assets/folder/edit2.png";
import image3 from "../assets/folder/edit3.png";
import image4 from "../assets/folder/edit4.png";
import image5 from "../assets/folder/edit5.png";
import image6 from "../assets/folder/edit6.png";
import image7 from "../assets/folder/food-mern.png";
import image8 from "../assets/folder/dashboard.png";
import ShinyButton from "./magicui/shiny-button";
import SparklesText from "./magicui/sparkles-text";
export default function SidePro() {
  interface MenuItem {
    id: number;
    name: string;
    Image?: StaticImageData | string;
    link?: string;
    description: string;
  }
  const Menu: MenuItem[] = [
    {
      id: 1,
      name: "mern admin dashboard",
      Image: image8,
      description:
        " (Reactjs , Tailwindcss , Nodejs , MongoDb , Express and many other libraries...)",
    },
    {
      id: 1,
      name: "mern registration form",
      Image: image9,
      description:
        " (Reactjs , Tailwindcss , Nodejs , MongoDb , Express and many other libraries...)",
    },

    {
      id: 1,
      name: "mern online food app",
      Image: image4,
      description:
        " (Reactjs , Tailwindcss , Nodejs , MongoDb , Express DaisyUI and many other Packages and libraries...)",
    },

    {
      id: 1,
      name: "react skill accadmey ",
      Image: image3,
      link: "https://github.com/Sameertahir024/Skill-Academy",
      description:
        " (Reactjs , Tailwindcss , and many other Packages and libraries...)",
    },
    {
      id: 2,
      name: "online pizza shop-UI",
      Image: image5,
      link: "https://github.com/Sameertahir024/Online-Pizza-Shop",
      description:
        " (Reactjs , Tailwindcss , and many other Packages and libraries...)",
    },
    {
      id: 3,
      name: "online courses landing page",
      Image: image6,
      link: "https://github.com/Sameertahir024/Social-Academy",
      description:
        " (Reactjs , Tailwindcss , and many other Packages and libraries...)",
    },

    {
      id: 4,
      name: "nextjs personal portfolio",
      Image: image7,
      description:
        " (Nextjs , Tailwindcss , and many other Packages and libraries...)",
    },
    {
      id: 5,
      name: "books shoping landing page",
      Image: image2,
      description:
        " (Reactjs , Tailwindcss , and many other Packages and libraries...)",
    },
  ];
  return (
    <div>
      <div className="container-size space-y-2 mt-8">
        <SparklesText text="Projects " />
        <h1 className="opacity-50">
          NOTE : Some of projects may note have production URL
        </h1>
      </div>
      <div
        className={
          " container-size my-16 grid md:grid-cols-4  gap-20  lg:flex-row"
        }
      >
        {Menu.map((menu: MenuItem, index) => {
          return (
            <MagicCard
              key={index}
              className="cursor-pointer p-2 flex flex-col items-center justify-center shadow-2xl"
            >
              <Image
                src={menu.Image || "default"}
                alt=""
                sizes=""
                className=" rounded-lg py-1"
              />
              <div className="space-y-2">
                <h1 className="text-xs uppercase font-bold playfair-display">
                  {menu.name}
                </h1>
                <hr />
                <h1 className="text-xs">{menu.description.slice(0, 70)}</h1>
                <ShinyButton
                  className="w-full rounded-[7px] bg-black text-white border-2"
                  text="Live Preview"
                />
              </div>
            </MagicCard>
          );
        })}
      </div>
    </div>
  );
}
