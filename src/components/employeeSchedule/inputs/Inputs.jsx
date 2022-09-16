import React, { useState } from 'react';
import { scheduleManagement } from '../../../helpers/mangeSchedule';

export const Inputs = ({ setSchedule }) => {
  const [freeDays, setFreeDays] = useState([]);
  const [ordinaryEmployeeHours, setOrdinaryEmployeeHours] = useState(0);

  const checkedDay = (e) => {
    console.log(e);
    const isChecked = e.target.checked;
    const value = e.target.name;
    if (isChecked) {
      setFreeDays((prev) => (prev !== undefined ? prev.concat([value]) : [value]));
    } else {
      setFreeDays(() => freeDays.find((day) => day !== value));
    }
    console.log(isChecked);
  };
  console.log(freeDays);

  const submitEmployeeSchedule = (e) => {
    e.preventDefault();
    const returnedSchedule = scheduleManagement(ordinaryEmployeeHours, freeDays, 1);
    console.log(returnedSchedule);
    setSchedule(returnedSchedule);
    setFreeDays([]);
    setOrdinaryEmployeeHours(0);
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
        />
        {/* checkboxes */}

        <label>Días libres</label>
        <br />
        <label htmlFor='monday'>Lunes</label>
        <input type='checkbox' name='monday' onClick={checkedDay} />
        <label htmlFor='tuesday'>Martes</label>
        <input type='checkbox' name='tuesday' onClick={checkedDay} />
        <label htmlFor='wednesday'>Miércoles</label>
        <input type='checkbox' name='wednesday' onClick={checkedDay} />
        <label htmlFor='thursday'>Jueves</label>
        <input type='checkbox' name='thursday' onClick={checkedDay} />
        <label htmlFor='friday'>Viernes</label>
        <input type='checkbox' name='friday' onClick={checkedDay} />
        <label htmlFor='saturday'>Sábado</label>
        <input type='checkbox' name='saturday' onClick={checkedDay} />
        <label htmlFor='sunday'>Domingo</label>
        <input type='checkbox' name='sunday' onClick={checkedDay} />
        <input type='submit' onClick={submitEmployeeSchedule} />
      </form>
    </React.Fragment>
  );
};
