import React from 'react';
import './EmployeesView.css';

export const EmployeesView = ({ data, openEmployees }) => {
  const employee = data.map((employee) => (
    <main className='employee-container'>
      <section className='employee-content-container'>
        <section className='employee-header'>
          <p className='bold-text employee-name'>{` ${employee.employeeName}`}</p>
          <div className='employee-deletion'>X</div>
        </section>
        <section className='color-container'>
          <p className='bold-text'>Color: </p>

          <div style={{ backgroundColor: employee.color }} className='employee-color-view'></div>
        </section>
      </section>
    </main>
  ));
  return <>{openEmployees && employee}</>;
};
