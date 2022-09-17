import React, { useRef, useState } from 'react';
import './App.css';
import { EmployeeSchedule } from './components/employeeSchedule/EmployeeSchedule';
import { Inputs } from './components/inputs/Inputs';
import BasicModal from './components/modal/BasicModal';

function App() {
  const [schedule, setSchedule] = useState({});
  const [freeDays, setFreeDays] = useState([]);
  const [ordinaryEmployeeHours, setOrdinaryEmployeeHours] = useState('');
  // Modal
  const [open, setOpen] = useState(false);
  return (
    <div className='app'>
      <Inputs
        setSchedule={setSchedule}
        freeDays={freeDays}
        setFreeDays={setFreeDays}
        ordinaryEmployeeHours={ordinaryEmployeeHours}
        setOrdinaryEmployeeHours={setOrdinaryEmployeeHours}
        open={open}
        setOpen={setOpen}
      />
      <EmployeeSchedule schedule={schedule} />
      <BasicModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
