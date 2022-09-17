import React, { useState } from 'react';
import { getTotalHoursPerDay } from '../../../helpers/getTotalHoursPerDay';
import style from './ScheduleTable.module.css';

export const TotalEmployeesTable = ({ schedule, totalEmployees, deleteEmployee }) => {
  console.log(totalEmployees);
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

  const allMonday = getTotalHoursPerDay(array, 'monday');
  const allTuesday = getTotalHoursPerDay(array, 'tuesday');
  const allWednesday = getTotalHoursPerDay(array, 'wednesday');
  const allThursday = getTotalHoursPerDay(array, 'thursday');
  const allFriday = getTotalHoursPerDay(array, 'friday');
  const allSaturday = getTotalHoursPerDay(array, 'saturday');
  const allSunday = getTotalHoursPerDay(array, 'sunday');

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
          <tr className={style.results}>
            <th scope='row'>Totals</th>
            <td>{allMonday}</td>
            <td>{allTuesday}</td>
            <td>{allWednesday}</td>
            <td>{allThursday}</td>
            <td>{allFriday}</td>
            <td>{allSaturday}</td>
            <td>{allSunday}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
