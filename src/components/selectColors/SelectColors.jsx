import React from 'react';
import { useState } from 'react';
import { nameFormatter } from '../../helpers/nameFormatter';
import { postEmployee } from '../../services/postEmployee';
import GeneralModal from '../modals/generalModal/GeneralModal';
import './SelectColors.css';

export const SelectColors = ({ accordion, employeeRequest, setEmployeeRequest }) => {
  const defaultColor = '#FF007F';
  const initialData = {
    color: defaultColor,
    employeeName: '',
  };

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialData);
  // here i want to send a post request to an API which send a request to MongoDB
  const fillEmployee = (e) => {
    e.preventDefault();
    postEmployee(formData)
      .then((data) => {
        console.log(data);
        setEmployeeRequest({ name: data.employeeName, color: data.color, message: 'created' });
        setOpen(true);
      })
      .catch((error) => {
        setEmployeeRequest(error.message);
        setOpen(true);
      });
    // reset
    setFormData({ color: defaultColor, employeeName: '' });
  };

  return (
    <>
      {accordion && (
        <form onSubmit={fillEmployee} className='select-color-form'>
          <section className='section-container'>
            <label htmlFor='employee-name'>Nombre:</label>
            <input
              type='text'
              name='employee-name'
              className='input-style'
              onChange={(e) =>
                setFormData({ ...formData, employeeName: nameFormatter(e.target.value) })
              }
              value={nameFormatter(formData.employeeName)}
              required
            />
          </section>
          <section className='section-container'>
            <label htmlFor='employee'>Selecciona un color:</label>
            <input
              type='color'
              name='employee'
              className='color-input input-style'
              onChange={(e) => setFormData({ ...formData, color: e.target.value })}
              value={formData.color}
            />
          </section>
          <input type='submit' value='Crear empleado' className='color-submit input-style' />
        </form>
      )}
      <GeneralModal employeeRequest={employeeRequest} open={open} setOpen={setOpen} />
    </>
  );
};
