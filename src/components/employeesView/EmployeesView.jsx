import React from 'react';

export const EmployeesView = ({ data, openEmployees }) => {
  const employee = data.map((employee) => (
    <section>
      <p>{`Empleado: ${employee.employeeName}`}</p>
      <p>Color: </p>
      <div
        style={{ backgroundColor: employee.color, width: '5rem', height: '5rem', margin: '0 auto' }}
      ></div>
    </section>
  ));
  return <>{openEmployees && employee}</>;
};
