import React from 'react';

export const EmployeeSchedule = ({ schedule }) => {
  return (
    <>
      <h1>{Object.entries(schedule).join(',')}</h1>
      <table>
        <thead>
          <tr>
            {Object.entries(schedule).map((day, index) => (
              <td key={index}>{day[0]}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.entries(schedule).map((day, index) => (
              <td key={index}>{day[1]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};
