import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Daniel Martinez",
    username: "@danielmartinez",
    body: "This is a revelation! It's clear that a lot of thought and care went into making this. It's incredibly user-friendly, and it just works, without any hassle. I'm beyond impressed.",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Sophia Rodriguez",
    username: "@sophiarodriguez",
    body: "I've been using this for a while now, and it just keeps getting better. The updates are spot on, and the developers clearly listen to feedback. It's a pleasure to use every day.",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "James Lee",
    username: "@jameslee",
    body: "This has completely transformed how I work. The ease of use and the attention to detail are unmatched. I can't recommend it enough, and I'm so glad I found it.",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Olivia Gonzalez",
    username: "@oliviagonzalez",
    body: "It's rare to find something that lives up to the hype, but this absolutely does. The user interface is intuitive, and the features are exactly what I needed. I'm thoroughly impressed.",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Matthew Clark",
    username: "@matthewclark",
    body: "This product is nothing short of amazing. The design is beautiful, and it works flawlessly. I've never had such a seamless experience, and I can't get enough of it.",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Ava Lewis",
    username: "@avalewis",
    body: "I've been telling everyone about this! It's not just about the features; it's about the whole experience. The level of care and thought that went into this is clear, and it shows.",
    img: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Joseph Walker",
    username: "@josephwalker",
    body: "This is a game-changer. It's so easy to use, and the results are exactly what I was hoping for. It's clear that a lot of effort went into making this the best it can be.",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Isabella Young",
    username: "@isabellayoung",
    body: "I can't say enough good things about this. It's everything I've been looking for and more. The user experience is fantastic, and it's made a huge difference in how I approach my work.",
    img: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Ethan Harris",
    username: "@ethanharris",
    body: "This is beyond amazing! It's so well designed, and the attention to detail is incredible. I've never experienced anything quite like it, and I'm absolutely loving it.",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Mia King",
    username: "@miaking",
    body: "It's rare to find something that is both innovative and easy to use, but this manages to do just that. The interface is intuitive, and it works like a charm. I'm thoroughly impressed.",
    img: "https://randomuser.me/api/portraits/women/9.jpg",
  },

  {
    name: "Amelia Adams",
    username: "@ameliaadams",
    body: "I can't believe how much I love this. It's exactly what I needed, and it works perfectly. The design is stunning, and it's so easy to use. I can't imagine my life without it now.",
    img: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-60 w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-white ",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs opacity-50 font-medium dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-[13px]">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div>
      <div className="h-screen  bg-[#080202] relative flex  mx-7 rounded-[7px]  flex-row items-center justify-center overflow-hidden  border  md:shadow-xl">
        <div className=" text-white flex my-16 flex-col items-center gap-4 pr-40 ">
          <h1 className="uppercase text-xs ">Happy clients</h1>
          <h1 className=" text-4xl font-bold playfair-display ">
            What my client say about me!
          </h1>
          <h1 className="text-center text-[16px] opacity-50">
            Don't just take my words for it see what <br />my clients say about
            my work.
          </h1>
        </div>

        <div className="rotate-12">
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="rotate-12">
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black "></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black "></div>
      </div>
    </div>
  );
}
