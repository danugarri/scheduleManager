import React, { useEffect } from 'react';
import { extractOnlyDays } from '../../../helpers/extractOnlyDays';
import { useGetAllTotalHours } from '../../../hooks/useGetAllTotalHours';
import style from './ScheduleTable.module.css';

export const TotalEmployeesTable = ({ schedule, totalEmployees, deleteEmployee }) => {
  console.log(totalEmployees);

  // Array with an object with the worked hours per day
  const workedHoursPerDays = extractOnlyDays(totalEmployees);

  const allDays = useGetAllTotalHours(workedHoursPerDays);
  for (let totalPerDay in allDays) {
    console.log(allDays[totalPerDay]);
  }
  useEffect(() => {
    let newSchedule = { ...schedule };
    const recalculateHours = () => {
      for (let totalPerDay in allDays) {
        console.log(allDays[totalPerDay]);
        if (allDays[totalPerDay] > 11) {
          newSchedule = {
            ...newSchedule,
            [totalPerDay]: schedule[totalPerDay] - (allDays[totalPerDay] - 11),
          };
        }

        console.log('entraaaaaaaaaaaaaa');
        // setSchedule(schedule);
      }
      console.log(newSchedule);
    };

    recalculateHours();
  }, [allDays, schedule]);

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
              <td className={style.scheduleTBodyTd}>{allDays.monday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.tuesday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.wednesday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.thursday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.friday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.saturday}</td>
              <td className={style.scheduleTBodyTd}>{allDays.sunday}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  );
};
