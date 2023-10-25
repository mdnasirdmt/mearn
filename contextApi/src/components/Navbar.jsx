import React from "react";
import {  Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="text-pink-500 text-center font-bold text-5xl">
      This Is Navbar
      <div>
        <nav>
          <ul className=" text-center font-bold text-5xl flex gap-5 bg-slate-500 text-slate-200 justify-evenly">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Header">
              <li>Header</li>
            </Link>
            <Link to="/Footer">
              <li>Footer</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
