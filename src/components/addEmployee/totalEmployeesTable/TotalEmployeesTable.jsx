import React from 'react';
import { extractOnlyDays } from '../../../helpers/extractOnlyDays';
import { useGetAllTotalHours } from '../../../hooks/useGetAllTotalHours';
import style from './ScheduleTable.module.css';

export const TotalEmployeesTable = ({ schedule, totalEmployees, deleteEmployee }) => {
  console.log(totalEmployees);

  // Array with an object with the worked hours per day
  const workedHoursPerDays = extractOnlyDays(totalEmployees);

  const [allDays] = useGetAllTotalHours(workedHoursPerDays);

  return (
    <>
      {schedule.hasOwnProperty('monday') && (
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
                      <button
                        key='button'
                        className={style.deleteButton}
                        onClick={() => deleteEmployee(employee)}
                      >
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
              <td className={style.scheduleTBodyTd}>{allDays.allMonday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.allTuesday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.allWednesday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.allThursday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.allFriday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.allSaturday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.allSunday}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};
