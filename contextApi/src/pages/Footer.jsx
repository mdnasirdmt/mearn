import React, { useContext } from "react";
import { MyContext } from "../../helper/Context";

const Footer = () => {
  const user = useContext(MyContext);
  return (
    <>
      <div className="text-slate-700 text-center font-bold text-5xl">
        This Is Footer
      </div>
      <h1 className="text-blue-500 text-center font-bold text-5xl">{user}</h1>
    </>
  );
};

export default Footer;
