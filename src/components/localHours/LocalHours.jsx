import React from 'react';
import './LocalHours.css';
export const LocalHours = ({ localWorkingHours, hours, setBeginning, emptyTable }) => {
  const hoursList = [];
  for (const hour in hours) {
    hoursList.push(<li key={hour}> {`${hour}: ${hours[hour]} `}</li>);
  }
  const returnToBeginning = () => {
    emptyTable();
    setBeginning(true);
  };
  return (
    <div className='local-hours-container '>
      <p>{`${localWorkingHours} Horas`}</p>
      <ul>{hoursList}</ul>
      <button onClick={returnToBeginning} className='begin'>
        Cambiar
      </button>
    </div>
  );
};
