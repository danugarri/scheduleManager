import React from 'react';

export const EmployeeTable = ({ schedule }) => {
  return (
    <>
      <table className='schedule-table'>
        <thead>
          <tr>
            {/* Rendering if the object is defined with the table properties */}
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
