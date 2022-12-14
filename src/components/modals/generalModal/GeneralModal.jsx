import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../BasicModal.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function GeneralModal({ setOpen, open, employeeRequest }) {
  const handleClose = () => setOpen(false);
  const message =
    employeeRequest.message === 'created' ? (
      <>
        <p>Has añadido a {employeeRequest.name}</p>
        <p>Con el color: {employeeRequest.color}</p>
      </>
    ) : (
      <p>Has eliminado a {employeeRequest.name}</p>
    );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setOpen(false);
          }
        }}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            {message}
            <div
              style={{
                backgroundColor: employeeRequest.color,
                width: '5rem',
                height: '5rem',
                margin: '0 auto',
              }}
            ></div>
            <button onClick={handleClose} className='close-button '>
              X
            </button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
