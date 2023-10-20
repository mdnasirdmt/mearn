import React from "react";

const Nav = () => {
  return (
    <nav className="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
      <div className="text-indigo-700 text-2xl font-bold cursor-pointer">
        PW Skills
      </div>

      <ul className="md:flex hidden font-semibold">
        <li className="mx-[10px] cursor-pointer">Home</li>
        <li className="mx-[10px] cursor-pointer">About Us</li>
        <li className="mx-[10px] cursor-pointer">Contact Us</li>
      </ul>

      <div className="px-2 py-2 bg-indigo-700 text-white rounded cursor-pointer md:block hidden">
        Login/Signup
      </div>

      <div className="md:hidden">
        <a className="text-4xl" href="#"> &#8801;</a>
      </div>
    </nav>
  );
};
export default Nav;
