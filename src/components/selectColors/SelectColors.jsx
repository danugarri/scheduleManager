import React from 'react';
import './SelectColors.css';

export const SelectColors = ({ accordion }) => {
  // here i want to send a post request to an API which send a request to MongoDB
  //   const createEmployee = () => {};
  return (
    <>
      {accordion && (
        <form onSubmit={() => {}} className='select-color-form'>
          <section className='section-container'>
            <label htmlFor='employee-name'>Nombre:</label>
            <input type='text' name='employee-name' className='input-style' />
          </section>
          <section className='section-container'>
            <label htmlFor='employee'>Selecciona un color:</label>
            <input
              type='color'
              name='employee'
              defaultValue={'#FF007F'}
              className='color-input input-style'
            />
          </section>
          <input type='submit' value='Crear empleado' className='color-submit' />
        </form>
      )}
    </>
  );
};
