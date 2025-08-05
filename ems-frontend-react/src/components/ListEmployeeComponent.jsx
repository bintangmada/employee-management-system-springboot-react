import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";

const ListEmployeeComponent = () => {
  //   const dummyData = [
  //     {
  //       id: 1,
  //       firstName: "Budi",
  //       lastName: "Dermawan",
  //       email: "budi@gmail.com",
  //     },
  //     {
  //       id: 2,
  //       firstName: "Maikel",
  //       lastName: "Angelo",
  //       email: "maikel@gmail.com",
  //     },
  //     {
  //       id: 3,
  //       firstName: "Donatello",
  //       lastName: "Davinci",
  //       email: "donatello@gmail.com",
  //     },
  //   ];

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">LIST OF EMPLOYEES</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
