import React, { useState } from "react";
function ShowEmployeeSalaryDetails(props) {
  return (
    <div>
      <div>Employee Name: {props.name}</div>
      <div>Employee Salary: {props.salary}</div>
      <div>Employee Bonus: {props.bonus}</div>
    </div>
  );
}

function ShowEmployeeBasicDetails(props) {
  return (
    <div>
      <div>Employee Name: {props.name}</div>
      <div>Employee Age: {props.age}</div>
      <div>Employee Designation: {props.designation}</div>
    </div>
  );
}

function getEmployeeData() {
  return {
    name: "Mayank",
    age: 30,
    designation: "Developer",
    salary: 30000,
    bonus: 2000,
  };
}

var HigherOrderComponent = function (WrappedComponent) {
  return function EmployeeDetailComponents() {
    const [employee, setEmployee] = useState(getEmployeeData());
    return (
      <div>
        <WrappedComponent {...employee}></WrappedComponent>
      </div>
    );
  };
};

var EmployeeBasicDetails = HigherOrderComponent(ShowEmployeeBasicDetails);

var EmployeeSalaryDetails = HigherOrderComponent(ShowEmployeeSalaryDetails);
export { EmployeeBasicDetails, EmployeeSalaryDetails };
