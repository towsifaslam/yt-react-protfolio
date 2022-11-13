import React from "react";
import Mypic from "../protfoliopic/myimg.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black vai-black to-gray-500 text-white "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  px-4 md:flex-row h-full ">
        <div className="flex flex-col justify-center h-full  ">
          <h2 className="text-4xl sm:text-7xl  font-bold text-white ">
            I'm a Front Developer
          </h2>
          <p className="text-gray-500  py-4 max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            atque incidunt praesentium saepe adipisci aspernatur, similique
            explicabo, soluta numquam ullam ex iure eaque nostrum quibusdam ea
            suscipit consequuntur eum amet!
          </p>
          <div>
            <button className="group text-white w-fit px-6 my-2 flex items-center  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer p-3 font-bold">
              protfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          {" "}
          <img
            className="rounded-2xl mx-auto w-2/3 md:2/4"
            src={Mypic}
            alt="myProtfolio "
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
