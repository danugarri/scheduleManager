import React, { useState } from 'react';
import './App.css';
import { EmployeeSchedule } from './components/employeeSchedule/EmployeeSchedule';
import { Inputs } from './components/employeeSchedule/inputs/Inputs';

function App() {
  const [schedule, setSchedule] = useState({});
  const [freeDays, setFreeDays] = useState([]);
  const [ordinaryEmployeeHours, setOrdinaryEmployeeHours] = useState('');
  return (
    <React.Fragment>
      <Inputs
        setSchedule={setSchedule}
        freeDays={freeDays}
        setFreeDays={setFreeDays}
        ordinaryEmployeeHours={ordinaryEmployeeHours}
        setOrdinaryEmployeeHours={setOrdinaryEmployeeHours}
      />
      <EmployeeSchedule schedule={schedule} />
    </React.Fragment>
  );
}

export default App;
