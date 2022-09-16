import React from 'react';

export const EmployeeSchedule = ({ schedule }) => {
  return (
    <>
      <h1>{Object.entries(schedule).join(',')}</h1>
    </>
  );
};
