import React from 'react';
import './LocalHours.css';
export const LocalHours = ({ localWorkingHours, hours }) => {
  const hoursList = [];
  for (const hour in hours) {
    hoursList.push(<li key={hour}> {`${hour}: ${hours[hour]} `}</li>);
  }
  return (
    <div className='local-hours-container '>
      <p>{`${localWorkingHours} Horas`}</p>
      <ul>{hoursList}</ul>
    </div>
  );
};
