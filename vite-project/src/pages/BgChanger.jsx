import React, { useState } from "react";

const BgChanger = () => {
  const [bgColor, setBgColor] = useState("olive");

  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className=" w-full h-96 p-6 flex  "
      >
        <div className="  flex justify-evenly  w-full ">
          <div className=" w-12 h-12 text-sm  text-center   ">
            <button
              disabled={bgColor === "green"}
              onClick={() => {
                setBgColor("green");
              }}
              className="bg-white rounded text-green-700 "
            >
              Green
            </button>
          </div>
          <div className=" w-12 h-12 text-sm  text-center   ">
            <button
              disabled={bgColor === "purple"}
              onClick={() => {
                setBgColor("purple");
              }}
              className="bg-white rounded text-purple-600 "
            >
              Purple
            </button>
          </div>
          <div className=" w-12 h-12 text-sm  text-center  ">
            <button
              disabled={bgColor === "white"}
              onClick={() => {
                setBgColor("white");
              }}
              className="bg-slate-900 rounded text-white"
            >
              White
            </button>
          </div>
          <div className=" w-12 h-12 text-sm  text-center  ">
            <button
              disabled={bgColor === "blue"}
              onClick={() => {
                setBgColor("blue");
              }}
              className="bg-white rounded text-blue-500"
            >
              Blue
            </button>
          </div>
          <div className=" w-12 h-12 text-sm  text-center  ">
            <button
              disabled={bgColor === "orange"}
              onClick={() => {
                setBgColor("orange");
              }}
              className="bg-white rounded text-orange-400"
            >
              Orange
            </button>
          </div>
          <div className=" w-12 h-12 text-sm  text-center ">
            <button
              disabled={bgColor === "pink"}
              onClick={() => {
                setBgColor("pink");
              }}
              className="bg-white rounded text-pink-400"
            >
              Pink
            </button>
          </div>
          <div className=" w-12 h-12 text-sm  text-center ">
            <button
              disabled={bgColor === "grey"}
              onClick={() => {
                setBgColor("grey");
              }}
              className="bg-white rounded text-gray-600"
            >
              Grey
            </button>
          </div>
          <div className=" w-12 h-12 text-sm  text-center ">
            <button
              disabled={bgColor === "red"}
              onClick={() => {
                setBgColor("red");
              }}
              className="bg-white rounded text-red-600"
            >
              Red
            </button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default BgChanger;
