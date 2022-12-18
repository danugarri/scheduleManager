import React from 'react';
import { deleteEmployee } from '../../services/deleteEmployee';
import './EmployeesView.css';

export const EmployeesView = ({ data, openEmployees }) => {
  const sendDelete = () => {
    const id = document.getElementById('employee-container').ariaValueText;
    deleteEmployee(id);
  };
  const employee = data.map((employee, index) => (
    <main
      key={index}
      className='employee-container'
      id='employee-container'
      aria-valuetext={employee._id}
    >
      <section className='employee-content-container'>
        <section className='employee-header'>
          <p className='bold-text employee-name'>{` ${employee.employeeName}`}</p>
          <div onClick={sendDelete} className='employee-deletion'>
            X
          </div>
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
