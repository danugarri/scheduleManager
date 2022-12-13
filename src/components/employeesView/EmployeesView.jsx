import React from 'react';
import './EmployeesView.css';

export const EmployeesView = ({ data, openEmployees }) => {
  const employee = data.map((employee) => (
    <section className='employee-container'>
      <p className='bold-text'>{` ${employee.employeeName}`}</p>
      <section className='color-container'>
        <p className='bold-text'>Color: </p>
        <div style={{ backgroundColor: employee.color }} className='employee-color-view'></div>
      </section>
    </section>
  ));
  return <>{openEmployees && employee}</>;
};
