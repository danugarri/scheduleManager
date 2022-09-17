import React, { useState } from 'react';
import style from './ScheduleTable.module.css';

export const AddEmployee = ({ schedule, add, totalEmployees, setTotalEmployees, setId }) => {
  console.log(totalEmployees);
  const emptyTable = () => {
    setId(0);
    setTotalEmployees([]);
  };
  const deleteEmployee = (typedEmployee) => {
    const newTotal = totalEmployees.filter((employee) => employee.id !== typedEmployee.id);
    setTotalEmployees(newTotal);
  };

  return (
    <>
      <button onClick={add}>Añadir</button>
      <button onClick={emptyTable}>Vaciar Tabla</button>
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
                <td>
                  <button className={style.deleteButton} onClick={() => deleteEmployee(employee)}>
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
