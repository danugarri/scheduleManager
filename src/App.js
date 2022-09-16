import React, { useState } from 'react';
import './App.css';
import { EmployeeSchedule } from './components/employeeSchedule/EmployeeSchedule';
import { Inputs } from './components/employeeSchedule/inputs/Inputs';

function App() {
  const [schedule, setSchedule] = useState({});
  return (
    <React.Fragment>
      <Inputs setSchedule={setSchedule} />
      <EmployeeSchedule schedule={schedule} />
    </React.Fragment>
  );
}

export default App;
