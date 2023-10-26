import "./App.css";
import React, { useState, useEffect } from "react";

import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  // const listEmp = async () => {
  //   const response = await axios(`http://localhost:3001/api/data`);
  //   setEmployees(response.data);
  //   console.log(response.data);
  // };

  // useEffect(() => {
  //   listEmp();
  // }, []);

  useEffect(() => {
    axios
      .get("/api/employeeList")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1 className="bg-slate-400 text-center font-bold text-5xl p-3">
        Full Stack App
      </h1>

      <p className="bg-slate-200 text-center font-bold p-2">
        {" "}
        Total Employees : {employees.length}
      </p>

      {employees.map((emp: any) => (
        <div key={emp.id}>
          <h1 className="bg-slate-400 text-center font-bold text-5xl p-3">
            {emp.name}
          </h1>
          <p className="bg-slate-400 text-center  ">{emp.title}</p>
        </div>
      ))}
    </>
  );
}

export default App;
