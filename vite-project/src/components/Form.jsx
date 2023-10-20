import React, { useState } from "react";

const Form = () => {
  const [formValues, setFormValues] = useState([]);
  const [formDataDisplay, setFormDataDisplay] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    setFormValues([...formValues, formObject]);
    setFormDataDisplay(formObject);

    // post the data to the database here
    // console.log(formObject);
    // console.log(formData);
    // console.log(formValues);
    // console.log(formData.entries());
    // console.log(formDataDisplay);
    // console.log(event.target);
    // console.log(event.target.reset());
    event.target.reset();
  };

  return (
    <>
      <div
        style={{
          padding: 30,
          textAlign: "center",
          backgroundColor: "lightBlue",
          fontWeight: "bold",
        }}
      >
        <h1 className="text-5xl font-bold underline text-center bg-white-950 p-10 bg-slate-900 text-white m-5">
          Enter Your Details
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="form-field p-3">
              <label htmlFor="fullName">Full Name:</label>
              <input
                placeholder="Full Name"
                type="text"
                id="fullName"
                name="fullName"
                required
             
              />
            </div>

            <div className="form-field p-3">
              <label htmlFor="email">Email:</label>
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                required
   
              />
            </div>

            <div className="form-field p-3">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                placeholder="Phone Number"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
     
              />
            </div>

            <div className="form-field p-3">
              <label htmlFor="address">Address:</label>
              <input
                placeholder="Address"
                type="text"
                id="address"
                name="address"
                required
 
              />
            </div>

            <div className="form-field p-3">
              <label htmlFor="nationality">Country / Region:</label>
              <input
                placeholder="Country / Region"
                type="text"
                id="nationality"
                name="nationality"
                required
   
              />
            </div>

            <div className="form-field p-3">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                name="gender"
                required
     
              >
                <option value="">--Please choose an option--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-field p-3">
              <label htmlFor="married">Are you married?</label>
              <select
                id="married"
                name="married"
                required
        
              >
                <option value="">--Please choose an option--</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <br />
            <button
              className="bg-sky-700 hover:bg-sky-500 hover:text-white text-black font-bold w-24 h-10 "
            
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        <div>
          {formDataDisplay && (
            <div
              style={{
                padding: 30,
                textAlign: "center",
                backgroundColor: "lightBlue",
                fontWeight: "bold",
              }}
            >
              <h2>Entered Data</h2>
              <ul>
                {Object.entries(formDataDisplay).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
