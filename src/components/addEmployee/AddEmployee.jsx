import React from 'react';
import { ExportCsv } from '../exportCsv/ExportCsv';

import './AddEmployee.css';

import { TotalEmployeesTable } from './totalEmployeesTable/TotalEmployeesTable';

export const AddEmployee = ({
  schedule,
  add,
  totalEmployees,
  setTotalEmployees,
  emptyTable,
  leftWorkingHours,
}) => {
  const deleteEmployee = (typedEmployee) => {
    console.log('............');
    console.log(typedEmployee);
    const newTotal = totalEmployees.filter(
      (employee) => employee.Employee !== typedEmployee.Employee,
    );
    setTotalEmployees(newTotal);
  };

  return (
    <>
      {schedule.hasOwnProperty('monday') && (
        <div className='total-buttons'>
          <button onClick={add} className='space'>
            Añadir Empleado
          </button>
          <button onClick={emptyTable} className='space'>
            Vaciar Tabla
          </button>
          <ExportCsv csvData={totalEmployees} />
        </div>
      )}
      <TotalEmployeesTable
        schedule={schedule}
        totalEmployees={totalEmployees}
        deleteEmployee={deleteEmployee}
        leftWorkingHours={leftWorkingHours}
      />
    </>
  );
};
