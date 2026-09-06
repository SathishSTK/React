import React from "react";
import employees from "./details/employeDetails";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Heading */}
      <h1>Employee List</h1>

      {/* Employee Cards */}
      <div className="employee-container">

        {employees.map((employee) => (
          <div className="employee-card" key={employee.id}>

            {/* Employee Name */}
            <h2>{employee.name}</h2>

            {/* Employee Details */}
            <p>
              <strong>Role:</strong>{" "}
              {employee.role}
            </p>

            <p>
              <strong>Company:</strong>{" "}
              {employee.company}
            </p>

            <p>
              <strong>Experience:</strong>{" "}
              {employee.experience}
            </p>

            <p>
              <strong>Branch:</strong>{" "}
              {employee.branch}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;