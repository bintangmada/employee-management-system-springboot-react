import React, { useState } from "react";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  // function handleLastName(e) {
  //   setLastName(e.target.value);
  // }

  function saveEmployee(){

  }

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name </label>
                <input
                  type="text"
                  placeholder="Input First Name"
                  name="firstName"
                  value={firstName}
                  className="form-control mb-3"
                  onChange={handleFirstName}
                ></input>

                <label className="form-label">Last Name </label>
                <input
                  type="text"
                  placeholder="Input Last Name"
                  name="lastName"
                  value={lastName}
                  className="form-control mb-3"
                  // onChange={handleLastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>

                <label className="form-label">Email </label>
                <input
                  type="text"
                  placeholder="Input Email"
                  name="email"
                  value={email}
                  className="form-control mb-3"
                  // onChange={handleLastName}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>

                <button className="btn btn-success" onClick={saveEmployee}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
