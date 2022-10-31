import React from 'react';
import './TypeHours.css';

export const TypeHours = ({ submitHours }) => {
  return (
    <form className='hours-form' autoComplete='true' onSubmit={submitHours}>
      <h3>Selecciona la bolsa de Horas</h3>
      <label>Por defecto las horas por día son 11</label>
      <section className='hours-container'>
        <fieldset className='hours'>
          <legend>Lunes</legend>
          <input
            className='numbers-hours'
            type='number'
            autoFocus
            name='monday'
            min={0}
            placeholder='11'
            step='0.5'
          />
        </fieldset>
        <fieldset className='hours'>
          <legend>Martes</legend>
          <input
            className='numbers-hours'
            type='number'
            autoFocus
            name='tuesday'
            min={0}
            placeholder='11'
            step='0.5'
          />
        </fieldset>
        <fieldset className='hours'>
          <legend>Miércoles</legend>
          <input
            className='numbers-hours'
            type='number'
            autoFocus
            name='wednesday'
            min={0}
            placeholder='11'
            step='0.5'
          />
        </fieldset>
        <fieldset className='hours'>
          <legend>Jueves</legend>
          <input
            className='numbers-hours'
            type='number'
            autoFocus
            name='thursday'
            min={0}
            placeholder='11'
            step='0.5'
          />
        </fieldset>
        <fieldset className='hours'>
          <legend>Viernes</legend>
          <input
            className='numbers-hours'
            type='number'
            autoFocus
            name='friday'
            min={0}
            placeholder='11'
            step='0.5'
          />
        </fieldset>
        <fieldset className='hours'>
          <legend>Sábado</legend>
          <input
            className='numbers-hours'
            type='number'
            autoFocus
            name='saturday'
            min={0}
            placeholder='11'
            step='0.5'
          />
        </fieldset>
        <fieldset className='hours'>
          <legend>Domingo</legend>

          <input
            className='numbers-hours'
            type='number'
            autoFocus
            name='sunday'
            min={0}
            placeholder='11'
            step='0.5'
          />
        </fieldset>
      </section>
      <input type='submit' value='Empezar' className='begin' />
    </form>
  );
};
