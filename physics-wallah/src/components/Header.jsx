import React from "react";

const Header = () => {
  return (
    <>
      <div className="w-full h-auto bg-slate-950">
        <img
          className="w-full hidden md:block"
          src="../../public/images/web.jpg"
          alt=""
          srcset=""
        />

        <img
          className="w-full md:hidden"
          src="../../public/images/mobile.jpg"
          alt=""
          srcset=""
        />

        {/* Our Students  */}

        <div className=" w-full h-auto flex flex-col  md:flex-wrap  text-center items-center">
          <p className="text-center text-white font-bold text-3xl md:text-4xl mt-5">
            Pure Hardword, No Shortcuts!{" "}
          </p>

          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mb-4 mb-12 md:w-60 "></div>
        </div>

        <div className="w-full flex flex-wrap  justify-evenly">
          <div>
            <img
              className="w-24 h-24 mt-5"
              src="../../public/images/products-icon4.png"
              alt=""
            />
            <p className="text-3xl font-bold text-white">600+</p>
            <p className="text-3xl font-bold text-gray-500">
              Different Courses
            </p>
          </div>

          <div>
            <img
              className="w-24 h-24 mt-5 "
              src="../../public/images/products-icon2.png"
              alt=""
            />
            <p className="text-3xl font-bold text-white">700,000+</p>
            <p className="text-3xl font-bold text-gray-500">
              Students Enrolled
            </p>
          </div>

          <div>
            <img
              className="w-24 h-24 mt-5"
              src="../../public/images/products-icon3.png"
              alt=""
            />
            <p className="text-3xl font-bold text-white">10,000+</p>
            <p className="text-3xl font-bold text-gray-500">
              Successful Transition
            </p>
          </div>
        </div>

        {/* Our products */}

        <div className=" w-full h-auto flex flex-col  md:flex-wrap  text-center items-center mt-5">
          <p className="text-center text-white font-bold text-3xl md:text-4xl mt-5">
            Our Porducts{" "}
          </p>

          <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mb-4 mb-12 md:w-60 "></div>
        </div>

        <div className="w-[100%] h-auto flex flex-wrap  justify-around ">
          <div className="w-40 flex flex-col border-white border-2 mb-12 items-center p-2 rounded-xl ">
            <img
              className="w-20 h-20 rounded-xl"
              src="../../public/images/skills.png"
              alt=""
            />
            <p className="text-white text-bold text-xl ">PW Skills Lab</p>
            <p className="text-gray-500 text-bold text-xl ">
              Super charge your project development with our Lab
            </p>
          </div>
          <div className="w-40 flex flex-col border-white border-2 mb-12 items-center p-2 rounded-xl ">
            <img
              className="w-20 h-20 rounded-xl"
              src="../../public/images/job.jpeg"
              alt=""
            />
            <p className="text-white text-bold text-xl ">Job Portal</p>
            <p className="text-gray-500 text-bold text-xl ">
              Super charge your project development with our Lab
            </p>
          </div>
          <div className="w-40 flex flex-col border-white border-2 mb-12 items-center p-2 rounded-xl ">
            <img
              className="w-20 h-20 rounded-xl"
              src="../../public/images/experience.jpeg"
              alt=""
            />
            <p className="text-white text-bold text-xl ">Experience Portal</p>
            <p className="text-gray-500 text-bold text-xl ">
              Super charge your project development with our Lab
            </p>
          </div>
          <div className="w-40 flex flex-col border-white border-2 mb-12 items-center p-2 rounded-xl ">
            <img
              className="w-20 h-20 rounded-xl"
              src="../../public/images/affiliate.jpeg"
              alt=""
            />
            <p className="text-white text-bold text-xl ">Affiliate</p>
            <p className="text-gray-500 text-bold text-xl ">
              Super charge your project development with our Lab
            </p>
          </div>
          <div className="w-40 flex flex-col border-white border-2 mb-12 items-center p-2 rounded-xl ">
            <img
              className="w-20 h-20 rounded-xl"
              src="../../public/images/hallOfFame.jpeg"
              alt=""
            />
            <p className="text-white text-bold text-xl ">Hall Of Fame</p>
            <p className="text-gray-500 text-bold text-xl ">
              Super charge your project development with our Lab
            </p>
          </div>
        </div>

        
      </div>
    </>
  );
};
export default Header;
