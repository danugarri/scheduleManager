import React, { useState } from 'react';
import './App.css';
import { AddEmployee } from './components/addEmployee/AddEmployee';
import { EmployeeSchedule } from './components/employeeSchedule/EmployeeSchedule';
import { Inputs } from './components/inputs/Inputs';
import BasicModal from './components/modal/BasicModal';

function App() {
  const [schedule, setSchedule] = useState({});
  const [freeDays, setFreeDays] = useState([]);
  const [ordinaryEmployeeHours, setOrdinaryEmployeeHours] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [totalEmployees, setTotalEmployees] = useState([]);
  const [id, setId] = useState(0);
  const add = () => {
    const newSchedule = { ...schedule };
    setId((prev) => prev + 1);
    newSchedule.id = id;
    // Added an id to differenciate from others employee with the same values

    setTotalEmployees((prev) => prev.concat(newSchedule));
  };

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
        employeeName={employeeName}
        setEmployeeName={setEmployeeName}
        setTotalEmployees={setTotalEmployees}
      />
      <EmployeeSchedule schedule={schedule} />
      <BasicModal open={open} setOpen={setOpen} />
      <AddEmployee
        schedule={schedule}
        add={add}
        totalEmployees={totalEmployees}
        setTotalEmployees={setTotalEmployees}
        setId={setId}
      />
    </div>
  );
}

export default App;
