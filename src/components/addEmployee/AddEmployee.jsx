import React from 'react';

import { TotalEmployeesTable } from './totalEmployeesTable/TotalEmployeesTable';

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
      {schedule.hasOwnProperty('monday') && (
        <>
          <button onClick={add}>Añadir Empleado</button>
          <button onClick={emptyTable}>Vaciar Tabla</button>
        </>
      )}
      <TotalEmployeesTable
        schedule={schedule}
        totalEmployees={totalEmployees}
        deleteEmployee={deleteEmployee}
      />
    </>
  );
};
