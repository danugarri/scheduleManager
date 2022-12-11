export const getEmployee = async () => {
  // const initialUrl = 'http://localhost:5000';
  const deployedUrl = 'https://excel-file-writer-improved.onrender.com/employee';
  const response = await fetch(deployedUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};
