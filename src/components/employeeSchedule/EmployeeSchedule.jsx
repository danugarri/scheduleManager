import React from 'react';
import { nameFormatter } from '../../helpers/nameFormatter';
import './EmployeeSchedule.css';

export const EmployeeSchedule = ({ schedule, employeeName }) => {
  const isScheduleDefined = schedule.hasOwnProperty('monday');
  const nameFormatted = nameFormatter(employeeName);
  return (
    <>
      <table className='schedule-table'>
        <thead>
          <tr>
            {/* Rendering if the object is defined with the table properties */}
            {isScheduleDefined && <td>Empleado</td>}
            {Object.entries(schedule).map((day, index) => (
              <td key={index}>{day[0]}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {isScheduleDefined && <td>{nameFormatted}</td>}
            {Object.entries(schedule).map((day, index) => (
              <td key={index}>{day[1]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  );
};
