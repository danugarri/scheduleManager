import React, { useState } from 'react';
import { deleteEmployee } from '../../services/deleteEmployee';
import { getEmployee } from '../../services/getEmployees';
import GeneralModal from '../modals/generalModal/GeneralModal';
import './EmployeesView.css';

export const EmployeesView = ({ data, openEmployees, setText }) => {
  const [employeeDeleted, setEmployeeDeleted] = useState({});
  const [openDeletedModal, setOpenDeletedModal] = useState(false);

  const sendDelete = () => {
    const id = document.getElementById('employee-container').ariaValueText;
    deleteEmployee(id).then((response) => {
      const employeeDeleted = data.find((employee) => employee._id === response._id);
      console.log(employeeDeleted.employeeName);
      setEmployeeDeleted({ name: employeeDeleted.employeeName, message: 'deleted' });
      setOpenDeletedModal(true);
      setText({ name: employeeDeleted.employeeName, color: '', message: 'deleted' });
    });
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

  return (
    <>
      {openEmployees && employee}
      <GeneralModal
        text={employeeDeleted}
        open={openDeletedModal}
        setOpen={setOpenDeletedModal}
      ></GeneralModal>
    </>
  );
};
