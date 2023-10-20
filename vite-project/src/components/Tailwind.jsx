import React from "react";

const Tailwind = () => {
  return (
    <>
      <div className="h-screen grid place-content-between p-20 m-5 bg-slate-700 text-white  font-bold text-5xl flex-auto border-r-emerald-500">
        <h1>
          Tailwind Is A CSS Framwork
         
          
        </h1>
        <a  href="https://www.youtube.com/watch?v=_9mTJ84uL1Q"><h1 className="underline hover:text-red-400 text-sky-400 ">Click here to tailwind tutor</h1></a>

        <h1>React Is A Library</h1>
        <h1>Express Is A Framwork</h1>
      </div>

      <div className=" ">
        <div className=" p-6  mx-auto bg-slate-800 text-white font-bold rounded-xl max-w-xs flex items-center space-x-2">
          <div>
            <img
              className="h-10 w-10 "
              src="https://lh3.googleusercontent.com/ogw/AKPQZvwQEvpvLE_21SSlXDENGVMSeYFjLIgqJCYfvFW1mg=s32-c-mo"
              alt="sakht londa"
            />
          </div>

          <div className="text-left font-medium">
            <div>
              <h1>Expert Tailwind CSS</h1>
              <h3>Md Nasir Hussain</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tailwind;
