export const deleteEmployee = async (id) => {
  const initialUrl = 'http://localhost:5000/employee';
  const deployedUrl = 'https://excel-file-writer-improved.onrender.com/employee';
  const employeeId = { id };
  const response = await fetch(initialUrl, {
    body: JSON.stringify(employeeId),
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};
