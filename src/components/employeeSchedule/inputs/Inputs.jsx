import React, { useRef, useState } from 'react';

export const Inputs = () => {
  const [freeDays, setFreeDays] = useState(['']);
  const [ordinaryEmployeeHours, setOrdinaryEmployeeHours] = useState(0);
  const mondayRef = useRef();

  const checkedDay = () => {
    const isChecked = mondayRef.current.checked;
    const value = mondayRef.current.name;
    if (isChecked) {
      setFreeDays((prev) => [...prev, value]);
    }
    console.log(isChecked);
  };
  console.log(freeDays);
  return (
    <React.Fragment>
      <form onSubmit={() => {}}>
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
        <input type='checkbox' name='monday' ref={mondayRef} onClick={checkedDay} />
        <label htmlFor='tuesday'>Martes</label>
        <input type='checkbox' name='tuesday' />
        <label htmlFor='wednesday'>Miércoles</label>
        <input type='checkbox' name='wednesday' />
        <label htmlFor='thursday'>Jueves</label>
        <input type='checkbox' name='thursday' />
        <label htmlFor='friday'>Viernes</label>
        <input type='checkbox' name='friday' />
        <label htmlFor='saturday'>Sábado</label>
        <input type='checkbox' name='saturday' />
        <label htmlFor='sunday'>Domingo</label>
        <input type='checkbox' name='sunday' />
        <input type='submit' onClick={() => {}} />
      </form>
    </React.Fragment>
  );
};
