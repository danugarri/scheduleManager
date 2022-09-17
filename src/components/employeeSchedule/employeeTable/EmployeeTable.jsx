import React from 'react';

export const EmployeeTable = ({ schedule }) => {
  return (
    <>
      <table className='employee-table'>
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
