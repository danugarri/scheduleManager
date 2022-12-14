import React, { useState } from 'react';
import './App.css';
import { AddEmployee } from './components/addEmployee/AddEmployee';
import { EmployeeSchedule } from './components/employeeSchedule/EmployeeSchedule';
import { Inputs } from './components/inputs/Inputs';
import Spinner from './components/loaders/spinner/Spinner';
import { LocalHours } from './components/localHours/LocalHours';
import BasicModal from './components/modals/BasicModal';
import ControlFinalFreeDaysModal from './components/modals/controlFinalFreeDaysModal/ControlFinalFreeDaysModal';
import EmployeeModal from './components/modals/employeeModal/EmployeeModal';
import LeftHoursModal from './components/modals/leftHoursModal/LeftHoursModal';
// import MaxFreeDaysModal from './components/modals/maxFreeDays/MaxFreeDays';
import SameIdModal from './components/modals/sameIdModal/SameIdModal';
import { TypeHours } from './components/typeHours/TypeHours';
import { extractOnlyDays } from './helpers/extractOnlyDays';
import { getCandidateFreeDays } from './helpers/getCandidateFreeDays';
import { getTotalHoursPerEmployee } from './helpers/getTotalEmployeeHours';
import { getTotalSumation } from './helpers/getTotalSumation';
import { useGetAllTotalHours } from './hooks/useGetAllTotalHours';
import { checkMaxHoursAccordingToFreeDays } from './helpers/checkMaxHoursAccordingToFreeDays';
import MaxHoursModal from './components/modals/maxHoursModal/MaxHoursModal';
import MaxFourtyHoursModal from './components/modals/maxFourtyHoursModal/MaxFourtyHoursModal';
import { Schedule } from '@mui/icons-material';

function App() {
  const [hours, setHours] = useState({
    monday: 11,
    tuesday: 11,
    wednesday: 11,
    thursday: 11,
    friday: 11,
    saturday: 11,
    sunday: 11,
  });

  const [beginning, setBeginning] = useState(true);
  const [schedule, setSchedule] = useState({});
  const [freeDays, setFreeDays] = useState([]);
  const [ordinaryEmployeeHours, setOrdinaryEmployeeHours] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [totalEmployees, setTotalEmployees] = useState([]);
  // const localWorkingHours = 77;
  const localWorkingHours = getTotalSumation(hours);
  const workingHoursPerDay = hours;
  // Array with an object with the worked hours per day
  const workedHoursPerDays = extractOnlyDays(totalEmployees);
  const allDays = useGetAllTotalHours(workedHoursPerDays);
  const totalSumation = getTotalSumation(allDays);
  const leftWorkingHours = localWorkingHours - totalSumation;
  const candidateFreeDays = getCandidateFreeDays(allDays, hours);
  const submitHours = (e) => {
    e.preventDefault();
    setHours({
      monday: Number(e.target[1].value) || 11,
      tuesday: Number(e.target[3].value) || 11,
      wednesday: Number(e.target[5].value) || 11,
      thursday: Number(e.target[7].value) || 11,
      friday: Number(e.target[9].value) || 11,
      saturday: Number(e.target[11].value) || 11,
      sunday: Number(e.target[13].value) || 11,
    });
    setBeginning(false);
    setTotalEmployees([]);
    setSchedule({});
    setFreeDays([]);
    setOrdinaryEmployeeHours('');
    setEmployeeName('');
  };
  const maxHoursToDo = checkMaxHoursAccordingToFreeDays(allDays, workingHoursPerDay, freeDays);

  const emptyTable = () => {
    setTotalEmployees([]);
  };
  const add = () => {
    console.log(totalEmployees);
    console.log(Schedule);
    const totalHoursPerEmployee = getTotalHoursPerEmployee(schedule);
    schedule.totalHours = totalHoursPerEmployee;
    const newSchedule = { ...schedule };
    newSchedule.totalHours = totalHoursPerEmployee;
    const notCalculatedNewSchedule = totalEmployees.find(
      (employee) => employee.Employee === schedule.Employee,
    );
    if (!notCalculatedNewSchedule) {
      setTotalEmployees((prev) => prev.concat(newSchedule));
    } else {
      setOpenSameIdModal(true);
    }
  };

  // Modals
  const [open, setOpen] = useState(false);
  const [openFreeDaysModal, setOpenFreeDaysModal] = useState(false);
  const [openEmployeeModal, setOpenEmployeeModal] = useState(false);
  const employeeConfirmation = () => {
    setOpenEmployeeModal(true);
  };
  const [openLeftHoursModal, setOpenLeftHoursModal] = useState(false);
  const [openSameIdModal, setOpenSameIdModal] = useState(false);
  const [openControlFinalFreeDays, setOpenControlFinalFreeDays] = useState(false);
  const [openMaxHoursAccordingToFreeDays, setOpenMaxHoursAccordingToFreeDays] = useState(false);
  const [openMaxFourtyHoursModal, setOpenMaxFourtyHoursModal] = useState(false);
  // Loader
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {beginning ? (
        <TypeHours submitHours={submitHours} />
      ) : (
        <div className='app'>
          <LocalHours
            localWorkingHours={localWorkingHours}
            hours={hours}
            setBeginning={setBeginning}
          />

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
            totalEmployees={totalEmployees}
            employeeConfirmation={employeeConfirmation}
            allDays={allDays}
            leftWorkingHours={leftWorkingHours}
            setOpenLeftHoursModal={setOpenLeftHoursModal}
            emptyTable={emptyTable}
            workingHoursPerDay={hours}
            setOpenControlFinalFreeDays={setOpenControlFinalFreeDays}
            localWorkingHours={localWorkingHours}
            setIsLoading={setIsLoading}
            openMaxHoursAccordingToFreeDays={openMaxHoursAccordingToFreeDays}
            setOpenMaxHoursAccordingToFreeDays={setOpenMaxHoursAccordingToFreeDays}
            setOpenMaxFourtyHoursModal={setOpenMaxFourtyHoursModal}
          />

          {!isLoading ? <EmployeeSchedule schedule={schedule} /> : <Spinner />}
          <BasicModal open={open} setOpen={setOpen} />
          {/* <MaxFreeDaysModal
            openFreeDaysModal={openFreeDaysModal}
            setOpenFreeDaysModal={setOpenFreeDaysModal}
          /> */}
          <EmployeeModal
            openEmployeeModal={openEmployeeModal}
            setOpenEmployeeModal={setOpenEmployeeModal}
            employeeConfirmation={employeeConfirmation}
          />
          <LeftHoursModal
            openLeftHoursModal={openLeftHoursModal}
            setOpenLeftHoursModal={setOpenLeftHoursModal}
            leftWorkingHours={leftWorkingHours}
            totalSumation={totalSumation}
            localWorkingHours={localWorkingHours}
            workingHoursPerDay={workingHoursPerDay}
          />
          <SameIdModal openSameIdModal={openSameIdModal} setOpenSameIdModal={setOpenSameIdModal} />
          <ControlFinalFreeDaysModal
            openControlFinalFreeDays={openControlFinalFreeDays}
            setOpenControlFinalFreeDays={setOpenControlFinalFreeDays}
            candidateFreeDays={candidateFreeDays}
          />
          <MaxHoursModal
            openMaxHoursAccordingToFreeDays={openMaxHoursAccordingToFreeDays}
            setOpenMaxHoursAccordingToFreeDays={setOpenMaxHoursAccordingToFreeDays}
            maxHoursToDo={maxHoursToDo}
          />
          <MaxFourtyHoursModal
            openMaxFourtyHoursModal={openMaxFourtyHoursModal}
            setOpenMaxFourtyHoursModal={setOpenMaxFourtyHoursModal}
          />
          <AddEmployee
            schedule={schedule}
            add={add}
            totalEmployees={totalEmployees}
            setTotalEmployees={setTotalEmployees}
            emptyTable={emptyTable}
            leftWorkingHours={leftWorkingHours}
          />
        </div>
      )}
    </>
  );
}

export default App;
