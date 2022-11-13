import React from "react";

import Demo from "../protfoliopic/demo1.png";
import Demo2 from "../protfoliopic/demo2.jpg";
import Demo3 from "../protfoliopic/demo3.png";

import Demo4 from "../protfoliopic/demo4.png";
import Demo5 from "../protfoliopic/demo5.jpg";
import Demo6 from "../protfoliopic/demo6.jpg";
function protfolio() {
  const protfolios = [
    {
      id: 1,
      src: Demo,
    },
    {
      id: 2,
      src: Demo2,
    },
    {
      id: 3,
      src: Demo3,
    },
    {
      id: 4,
      src: Demo4,
    },
    {
      id: 5,
      src: Demo5,
    },
    {
      id: 6,
      src: Demo6,
    },
  ];
  return (
    <div
      name="protfolio"
      className=" bg-gradient-to-b from-black to-gray-600 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Protfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 ms:px-0">
          {protfolios.map(({ id, src }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-yellow-50 rounded-lg duration-200 hover:scale-105"
              >
                <img src={src} alt="" className="rounded-md" />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 bg-[green] px-6 py-3 m-4 duration-200 hover:scale-105">
                    demo
                  </button>
                  <button className="w-1/2 bg-[red] px-6 py-3 m-4 duration-200 hover:scale-105">
                    come
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default protfolio;
