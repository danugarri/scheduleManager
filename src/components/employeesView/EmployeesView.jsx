import React, { useState } from 'react';
import { deleteEmployee } from '../../services/deleteEmployee';

import GeneralModal from '../modals/generalModal/GeneralModal';
import './EmployeesView.css';

export const EmployeesView = ({ data, openEmployees, setEmployeeRequest }) => {
  const [employeeDeleted, setEmployeeDeleted] = useState({});
  const [openDeletedModal, setOpenDeletedModal] = useState(false);
  const [hover, setHover] = useState(false);
  const [employeeHovered, setEmployeeHovered] = useState({});

  const sendDelete = (e) => {
    const id = e.currentTarget.ariaValueText;
    deleteEmployee(id).then((response) => {
      const employeeDeleted = data.find((employee) => employee._id === response._id);
      console.log(employeeDeleted._id);
      setEmployeeDeleted({ name: employeeDeleted.employeeName, message: 'deleted' });
      setOpenDeletedModal(true);
      setEmployeeRequest({ name: employeeDeleted.employeeName, color: '', message: 'deleted' });
    });
  };
  const employeeHover = (e) => {
    const id = e.currentTarget.ariaValueText;
    const employeeHovered = data.find((employee) => employee._id === id);
    setEmployeeHovered(employeeHovered);
    setHover(true);
  };
  const emptyList = (
    <div className='employee-container'>
      <section className='employee-content-container'>
        <section className='employee-header'>
          <p className='bold-text employee-name'>{`NO hay empleados`}</p>
        </section>
        <section className='color-container'>
          <p className='bold-text'>Color: </p>
          <div style={{ backgroundColor: '#FFFFFF' }} className='employee-color-view'></div>
        </section>
      </section>
    </div>
  );

  const employee = data.map((employee) => {
    const myStyle = hover && employeeHovered._id === employee._id ? 'red' : '';
    return (
      <div key={employee._id} className='employee-container' style={{ backgroundColor: myStyle }}>
        <section className='employee-content-container'>
          <section className='employee-header'>
            <p className='bold-text employee-name'>{` ${employee.employeeName}`}</p>
            <div
              onMouseOver={(e) => employeeHover(e)}
              onMouseOut={() => setHover(false)}
              onClick={(e) => sendDelete(e)}
              className='employee-deletion'
              aria-valuetext={employee._id}
            >
              X
            </div>
          </section>
          <section className='color-container'>
            <p className='bold-text'>Color: </p>
            <div style={{ backgroundColor: employee.color }} className='employee-color-view'></div>
          </section>
        </section>
      </div>
    );
  });

  return (
    <>
      {openEmployees && (employee.length > 0 ? employee : emptyList)}
      <GeneralModal
        employeeRequest={employeeDeleted}
        open={openDeletedModal}
        setOpen={setOpenDeletedModal}
      ></GeneralModal>
    </>
  );
};
