import React, { useState } from 'react';
import { AddEmployee } from './components/addEmployee/AddEmployee';
import { EmployeeSchedule } from './components/employeeSchedule/EmployeeSchedule';
import { Inputs } from './components/inputs/Inputs';
import BasicModal from './components/modals/BasicModal';
import EmployeeModal from './components/modals/employeeModal/EmployeeModal';
import MaxFreeDaysModal from './components/modals/maxFreeDays/MaxFreeDays';

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

  // Modals
  const [open, setOpen] = useState(false);
  const [openFreeDaysModal, setOpenFreeDaysModal] = useState(false);
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false);
  const employeeConfirmation = () => {
    setOpenEmployeeModal(true);
  };
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
        openFreeDaysModal={openFreeDaysModal}
        setOpenFreeDaysModal={setOpenFreeDaysModal}
        employeeName={employeeName}
        setEmployeeName={setEmployeeName}
        setTotalEmployees={setTotalEmployees}
        employeeConfirmation={employeeConfirmation}
      />
      <EmployeeSchedule schedule={schedule} />
      <BasicModal open={open} setOpen={setOpen} />
      <MaxFreeDaysModal
        openFreeDaysModal={openFreeDaysModal}
        setOpenFreeDaysModal={setOpenFreeDaysModal}
      />
      <EmployeeModal
        openEmployeeModal={openEmployeeModal}
        setOpenEmployeeModal={setOpenEmployeeModal}
        employeeConfirmation={employeeConfirmation}
      />
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
