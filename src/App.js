import React from "react";
import "./App.css";
import { EmployeeSchedule } from "./components/employeeSchedule/EmployeeSchedule";
import { Inputs } from "./components/employeeSchedule/inputs/Inputs";

function App() {
  return (
    <React.Fragment>
      <Inputs />
      <EmployeeSchedule />
    </React.Fragment>
  );
}

export default App;
