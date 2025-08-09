import React, { useEffect, useState } from "react";
import {
  deleteEmployeeById,
  getOneEmployee,
  listEmployees,
} from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

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
  const navigator = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function addEmployee() {
    navigator("/employee/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/employee/update/${id}`);
  }

  function deleteEmployee(id) {
    deleteEmployeeById(id)
      .then(setEmployees(employees.filter((emp) => emp.id != id)))

      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center mb-5 mt-5">LIST OF EMPLOYEES</h2>
      <button className="btn btn-primary mb-2" onClick={addEmployee}>
        Add Employee
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr className="align-middle">
            <th className="text-center">ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>DELETED STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="align-middle">
              <td className="text-center">{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.deletedStatus}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => updateEmployee(employee.id)}
                >
                  UPDATE
                </button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  DELETE
                </button>
                {/* <button className="btn btn-danger btn-sm">DELETE</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
