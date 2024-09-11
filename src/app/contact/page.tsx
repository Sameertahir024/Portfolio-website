import SparklesText from "@/components/magicui/sparkles-text";
import Footer from "@/components/ui/Footer";

const page = () => {
  return (
    <div>
      <div className=" container-size  ">
        <h1 className="select-none uppercase font-bold my-7">
          <SparklesText text="Contact me " colors={"#FE8FB5"} />
        </h1>

        <div className="space-y-5 mt-10">
          <div className="border-b-2">
            <label htmlFor="myInput">WHAT'S YOUR NAME?</label>
            <input
              type="text"
              placeholder="SAMEER TAHIR...* "
              className="w-full h-16 outline-none "
            />
          </div>
          <div className="border-b-2">
            <label htmlFor="myInput">WHAT'S YOUR EMAIL?</label>
            <input
              type="text"
              placeholder="sameertahir@gmail.com* "
              className="w-full h-16 outline-none"
            />
          </div>
          <div className="border-b-2">
            <label htmlFor="myInput">YOUR MESSAGE</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full h-28 outline-none "
              placeholder="HELLO , can you help me*"
            ></textarea>
          </div>
          <div className="mt-10">
            <button className=" uppercase text-xl border-2 w-24 h-24 duration-500 rounded-full border-[#080202] hover:text-white hover:bg-[#080202] ">
              submit
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default page;
