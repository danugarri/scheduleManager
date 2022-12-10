// import { dataExample } from './consts';

export const postData = async (csvData) => {
  // const initialUrl = 'https://excel-file-writer-improved.onrender.com';
  const deployedUrl = 'https://excel-file-writer-improved.onrender.com';
  const response = await fetch(deployedUrl, {
    body: JSON.stringify(csvData),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};
