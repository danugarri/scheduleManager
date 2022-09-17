import React, { useState } from 'react';
import style from './ScheduleTable.module.css';

export const AddEmployee = ({ schedule }) => {
  const [totalEmployees, setTotalEmployees] = useState([]);
  const add = () => {
    setTotalEmployees((prev) => prev.concat(schedule));
  };
  console.log(totalEmployees);
  return (
    <>
      <button onClick={add}>Añadir</button>
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
              <tr key={employeeIndex}>
                {employeeSchedule.map((day, index) => (
                  <td className={`${style.scheduleTBodyTd} ${style.tdPadding}`} key={index}>
                    {day[1]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
