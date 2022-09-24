import React from 'react';
import { CSVLink } from 'react-csv';
import DownloadIcon from '@mui/icons-material/Download';

export const CSV = (csvData) => {
  return <CSVLink data={csvData}>{DownloadIcon}</CSVLink>;
};
