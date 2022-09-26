import React, { useState } from 'react';
import './App.css';
import { AddEmployee } from './components/addEmployee/AddEmployee';
import { EmployeeSchedule } from './components/employeeSchedule/EmployeeSchedule';
import { Inputs } from './components/inputs/Inputs';
import BasicModal from './components/modals/BasicModal';
import EmployeeModal from './components/modals/employeeModal/EmployeeModal';
import MaxFreeDaysModal from './components/modals/maxFreeDays/MaxFreeDays';
import { extractOnlyDays } from './helpers/extractOnlyDays';
import { useGetAllTotalHours } from './hooks/useGetAllTotalHours';

function App() {
  const [schedule, setSchedule] = useState({});
  const [freeDays, setFreeDays] = useState([]);
  const [ordinaryEmployeeHours, setOrdinaryEmployeeHours] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [totalEmployees, setTotalEmployees] = useState([]);
  const [id, setId] = useState(0);
  // Array with an object with the worked hours per day
  const workedHoursPerDays = extractOnlyDays(totalEmployees);
  const allDays = useGetAllTotalHours(workedHoursPerDays);

  // function to recalculate the totalHours
  const recalculateHours = (recalculatedSchedule, newSchedule) => {
    const totalPerDay = 11;
    if (totalEmployees.length > 0) {
      totalEmployees.forEach((employee) => {
        for (let day in employee) {
          if (schedule[day] + employee[day] > 11) {
            recalculatedSchedule = {
              ...recalculatedSchedule,
              [day]: schedule[day] - (schedule[day] + employee[day] - totalPerDay),
            };
          }
          if (allDays[day] === 11) {
            recalculatedSchedule = {
              ...recalculatedSchedule,
              [day]: 0,
            };
          }
          if (allDays[day] < 11 && allDays[day] + schedule[day] > 11) {
            recalculatedSchedule = {
              ...recalculatedSchedule,
              [day]: totalPerDay - allDays[day],
            };
          }
        }
      });

      newSchedule.id = id;
      recalculatedSchedule.id = id;
      setTotalEmployees((prev) => prev.concat(recalculatedSchedule));
    } else {
      newSchedule.id = id;
      setTotalEmployees((prev) => prev.concat(newSchedule));
    }
  };
  const add = () => {
    const newSchedule = { ...schedule };
    let recalculatedSchedule = { ...schedule };
    setId((prev) => prev + 1);
    newSchedule.id = id;
    recalculatedSchedule.id = id;

    recalculateHours(recalculatedSchedule, newSchedule);
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
