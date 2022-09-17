import React, { useEffect, useState } from 'react';

export const AddEmployee = ({ schedule }) => {
  return (
    <>
      <table className='schedule-table'>
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
