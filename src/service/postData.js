// import { dataExample } from './consts';

export const postData = async (csvData) => {
  const response = await fetch('http://localhost:5000', {
    body: JSON.stringify(csvData),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};
