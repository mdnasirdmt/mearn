import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto px-4 text-white pt-8  bg-slate-700 mt-5 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
        <div>
          <img className="w-5 h-5" src="../../public/images/pw.png" alt="" /> 
          <p className="my-4">Email Us : pwsupport@gmail.com</p>
          <img className="w-20 h-20" src="../public/images/award.jpeg" alt="" />
        </div>

        <div>
            <h2 className="text-bold text-xl mt-4 ">PW Skills</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl"></div>
            <div>
                <p>About Us</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div>
            <h2 className="text-bold text-xl mt-4 ">Products</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl"></div>
            <div>
                <p>About Us</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div>
            <h2 className="text-bold text-xl mt-4 ">Links</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl"></div>
            <div>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>LinkedIn Policy</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
