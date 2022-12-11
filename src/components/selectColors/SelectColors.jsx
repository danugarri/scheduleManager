import React from 'react';
import { useState } from 'react';
import { postEmployee } from '../../services/postEmployee';
import './SelectColors.css';

export const SelectColors = ({ accordion }) => {
  const initialData = {
    color: '',
    employeeName: '',
  };
  const [formData, setFormData] = useState(initialData);
  // here i want to send a post request to an API which send a request to MongoDB
  const fillEmployee = (e) => {
    e.preventDefault();
    postEmployee(formData);
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
              onChange={(e) => setFormData({ employeeName: e.target.value })}
            />
          </section>
          <section className='section-container'>
            <label htmlFor='employee'>Selecciona un color:</label>
            <input
              type='color'
              name='employee'
              defaultValue={'#FF007F'}
              className='color-input input-style'
              onChange={(e) => setFormData({ color: e.target.value })}
            />
          </section>
          <input type='submit' value='Crear empleado' className='color-submit input-style' />
        </form>
      )}
    </>
  );
};
