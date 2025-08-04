import React from "react";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "Budi",
      lastName: "Dermawan",
      email: "budi@gmail.com",
    },
    {
      id: 2,
      firstName: "Maikel",
      lastName: "Angelo",
      email: "maikel@gmail.com",
    },
    {
      id: 3,
      firstName: "Donatello",
      lastName: "Davinci",
      email: "donatello@gmail.com",
    },
  ];

  return (
    <div>
      <h2>LIST OF EMPLOYEES</h2>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL</th>
            </tr>
        </thead>
        <tbody>
            {
                dummyData.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
