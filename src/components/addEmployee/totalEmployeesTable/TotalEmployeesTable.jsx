import React, { useState } from 'react';
import style from './ScheduleTable.module.css';

export const TotalEmployeesTable = ({ schedule, totalEmployees, deleteEmployee }) => {
  console.log(totalEmployees);
  let totalResult = {};
  let final = {};
  const array = [];
  totalEmployees.forEach(function (employee) {
    for (let day in employee) {
      if (day !== 'Employee' && day !== 'id') {
        final = {
          ...final,
          [day]: employee[day],
        };
      }
    }
    array.push(final);
  });
  console.log(array);

  const getTotalHoursPerDay = (dayName) => {
    return array
      .map((employee) => employee[dayName])
      .reduce((prev, current) => Number(prev) + Number(current), []);
  };
  const allMonday = getTotalHoursPerDay('monday');
  const allTuesday = getTotalHoursPerDay('tuesday');

  return (
    <>
      <table className={style.scheduleTable}>
        {
          <thead className={style.scheduleThead}>
            <tr>
              {Object.entries(schedule).map((day, index) => (
                <td className={style.tdPadding} key={index}>
                  {day[0]}
                </td>
              ))}
            </tr>
          </thead>
        }
        <tbody>
          {totalEmployees.map((employee, employeeIndex) => {
            const employeeSchedule = Object.entries(employee);
            return (
              <>
                <tr key={employeeIndex}>
                  {employeeSchedule.map((day, index) => (
                    <td className={`${style.scheduleTBodyTd} ${style.tdPadding}`} key={index}>
                      {day[1]}
                    </td>
                  ))}
                  <td>
                    <button className={style.deleteButton} onClick={() => deleteEmployee(employee)}>
                      X
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th scope='row'>Totals</th>
            <td>{allMonday}</td>
            <td>{allTuesday}</td>
            <td>21,000</td>
            <td>21,000</td>
            <td>21,000</td>
            <td>21,000</td>
            <td>21,000</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
