import React from 'react';
import './EmployeeSchedule.css';
import { EmployeeTable } from './employeeTable/EmployeeTable';

export const EmployeeSchedule = ({ schedule }) => {
  return <EmployeeTable schedule={schedule} />;
};
