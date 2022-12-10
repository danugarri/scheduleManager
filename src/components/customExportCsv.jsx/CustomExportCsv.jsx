import { useMemo } from 'react';
import { postData } from '../../service/postData';
import DownloadIcon from '@mui/icons-material/Download';
import './CustomExportCsv.css';

export const CustomExportCsv = ({ csvData }) => {
  let formattedCsv = useMemo(() => [], []);
  if (csvData.length > 0) {
    // Deleted id column
    formattedCsv = csvData.map((employee) => {
      delete employee.id;

      return employee;
    });
  }

  const downloadFile = () => {
    if (formattedCsv.length > 0) {
      postData(formattedCsv).then((response) => {
        window.open(response.data, '_self');
      });
    }
  };

  return (
    <span onClick={downloadFile}>
      <DownloadIcon fontSize='large' className='downloadIcon' />
    </span>
  );
};
