import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function validateForm() {
    const errorsCopy = { ...errors };
    let valid = true;

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First Name is Required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last Name is Required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is Required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  // function handleLastName(e) {
  //   setLastName(e.target.value);
  // }

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  function saveEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      createEmployee(employee).then((response) => {
        console.log(response.data);
        navigator("/");
      });
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 p-4">
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
                  className={`form-control mb-3 ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                  onChange={handleFirstName}
                ></input>
                {errors.firstName && (
                  <div className="invalid-feedback">{errors.firstName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name </label>
                <input
                  type="text"
                  placeholder="Input Last Name"
                  name="lastName"
                  value={lastName}
                  className={`form-control mb-3 ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                  // onChange={handleLastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                {errors.lastName && (
                  <div className="invalid-feedback">{errors.lastName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email </label>
                <input
                  type="text"
                  placeholder="Input Email"
                  name="email"
                  value={email}
                  className={`form-control mb-3 ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  // onChange={handleLastName}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button className="btn btn-success" onClick={saveEmployee}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
