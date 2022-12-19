import React, { useEffect, useState } from 'react';
import { getEmployee } from '../../services/getEmployees';
import { EmployeesView } from '../employeesView/EmployeesView';
import { SelectColors } from '../selectColors/SelectColors';
import './TypeHours.css';

export const TypeHours = ({ submitHours }) => {
  const [text, setText] = useState({});
  const [accordion, setAccordion] = useState(false);
  const [openEmployees, setOpenEmployees] = useState(false);
  const [data, setData] = useState([{ color: '', employeeName: '' }]);

  useEffect(() => {
    getEmployee().then((data) => setData(data));
  }, [text]);

  const displayEmployees = () => {
    setAccordion(false);
    setOpenEmployees(!openEmployees);
  };
  const handleConfigButton = () => {
    setAccordion(!accordion);
    setOpenEmployees(false);
  };
  const configButtonText = accordion ? 'Cerrar configuración' : 'Abrir configuración';
  const employeeButtonText = openEmployees ? 'Ocultar empleados' : 'Mostrar empleados';

  return (
    <div className='config-container'>
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
        <input
          type='button'
          value={configButtonText}
          onClick={handleConfigButton}
          className='begin'
        />
        <input
          type='button'
          value={employeeButtonText}
          onClick={displayEmployees}
          className='begin'
        />
      </form>
      <SelectColors accordion={accordion} text={text} setText={setText} />
      <EmployeesView data={data} openEmployees={openEmployees} setText={setText} />
    </div>
  );
};
