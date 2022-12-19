import { useEffect, useState } from 'react';
import { getEmployee } from '../services/getEmployees';

export const useGetEmployees = (employeeRequest) => {
  const [data, setData] = useState([{ color: '', employeeName: '' }]);

  useEffect(() => {
    getEmployee().then((data) => setData(data));
  }, [employeeRequest]);
  return data;
};
