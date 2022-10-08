import React from 'react';
import './LocalHours.css';
export const LocalHours = ({ localWorkingHours, hours, setBeginning }) => {
  const hoursList = [];
  for (const hour in hours) {
    hoursList.push(<li key={hour}> {`${hour}: ${hours[hour]} `}</li>);
  }
  return (
    <div className='local-hours-container '>
      <p>{`${localWorkingHours} Horas`}</p>
      <ul>{hoursList}</ul>
      <button onClick={() => setBeginning(true)} className='begin'>
        Cambiar
      </button>
    </div>
  );
};
