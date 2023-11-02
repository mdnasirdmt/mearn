import React, { useState, useEffect } from "react";

import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setdata] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/mdnasirdmt")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setdata(data);
  //         console.log("data from github : ", data);
  //       });
  //   }, []);

  return (
    <div className="text-center bg-gray-400 text-4xl p-12 m-12">
      <h3>Name : {data.name}</h3>
      <h3>Github Followers : {data.followers}</h3>
      <h3>Github Following : {data.following}</h3>
      <img className="w-40 h-40 " src={data.avatar_url} alt="nasir pic" />
    </div>
  );
};

export default Github;

//////////////////////////////////////
export const gitHubLoader = async () => {
  const response = await fetch("https://api.github.com/users/mdnasirdmt");

  return response.json();
};
