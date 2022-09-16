import React, { useRef, useState } from 'react';
import { scheduleManagement } from '../../../helpers/mangeSchedule';
import { removeItemFromArr } from '../../../helpers/removeDays';

export const Inputs = ({ setSchedule }) => {
  const [freeDays, setFreeDays] = useState([]);
  const [ordinaryEmployeeHours, setOrdinaryEmployeeHours] = useState('');

  const mondayRef = useRef();
  const tuesdayRef = useRef();
  const wednesdayRef = useRef();
  const thursdayRef = useRef();
  const fridayRef = useRef();
  const saturdayRef = useRef();
  const sundayRef = useRef();
  const checkedDay = (e) => {
    console.log(e);
    const isChecked = e.target.checked;
    const value = e.target.name;
    if (isChecked) {
      setFreeDays((prev) => prev.concat([value]));
    } else {
      removeItemFromArr(freeDays, value);
    }
    console.log(isChecked);
  };
  console.log(freeDays);

  const submitEmployeeSchedule = (e) => {
    e.preventDefault();
    if (ordinaryEmployeeHours !== 0) {
      const returnedSchedule = scheduleManagement(ordinaryEmployeeHours, freeDays, 1);
      console.log(returnedSchedule);
      setSchedule(returnedSchedule);
      setFreeDays([]);
      setOrdinaryEmployeeHours('');

      mondayRef.current.checked = false;
      tuesdayRef.current.checked = false;
      wednesdayRef.current.checked = false;
      thursdayRef.current.checked = false;
      fridayRef.current.checked = false;
      saturdayRef.current.checked = false;
      sundayRef.current.checked = false;
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={submitEmployeeSchedule}>
        <label htmlFor='ordinaryEmployeeHours'>Horas del trabajador según contrato</label>
        <input
          type='number'
          name='ordinaryEmployeeHours'
          onChange={(e) => {
            setOrdinaryEmployeeHours(e.target.value);
            console.log(e.target.value);
          }}
          value={ordinaryEmployeeHours}
          autoFocus
          //   onFocus={() => setOrdinaryEmployeeHours('')}
        />

        <br />
        <br />
        {/* checkboxes */}

        <label>Días libres</label>
        <br />
        <label htmlFor='monday'>Lunes</label>
        <input type='checkbox' name='monday' onClick={checkedDay} ref={mondayRef} />
        <label htmlFor='tuesday'>Martes</label>
        <input type='checkbox' name='tuesday' onClick={checkedDay} ref={tuesdayRef} />
        <label htmlFor='wednesday'>Miércoles</label>
        <input type='checkbox' name='wednesday' onClick={checkedDay} ref={wednesdayRef} />
        <label htmlFor='thursday'>Jueves</label>
        <input type='checkbox' name='thursday' onClick={checkedDay} ref={thursdayRef} />
        <label htmlFor='friday'>Viernes</label>
        <input type='checkbox' name='friday' onClick={checkedDay} ref={fridayRef} />
        <label htmlFor='saturday'>Sábado</label>
        <input type='checkbox' name='saturday' onClick={checkedDay} ref={saturdayRef} />
        <label htmlFor='sunday'>Domingo</label>
        <input type='checkbox' name='sunday' onClick={checkedDay} ref={sundayRef} />
        <input type='submit' onClick={submitEmployeeSchedule} />
      </form>
    </React.Fragment>
  );
};
