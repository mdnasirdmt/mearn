import React, { useState, useEffect, useContext } from "react"; // Make sure to import useState and useEffect from React
import axios from "axios";
import {MyContext} from "../../helper/Context";

const Header = () => {
  const [picList, setPicList] = useState([]);

  const user = useContext(MyContext);
  

  const getList = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setPicList(data);
      console.log(data);
    } catch (error) {
      console.error("Ye kaisa error hai:", error);
    }
  };

  // Use useEffect to call getList when the component mounts
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <div className="text-pink-500 text-center font-bold text-5xl">
        This Is Header 
      </div>
      <h1 className="text-blue-500 text-center font-bold text-5xl">{user}</h1>
      <div className=" ">
        {picList.map((pic, index) => (
          <div key={index} className=" p-5 gap-2 ">
            <img
              style={{ width: "300px", height: "300px" }}
              src={pic.download_url}
              alt={pic.author}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
