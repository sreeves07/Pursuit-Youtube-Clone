import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const AdModal = ( { open, handleClose }) => {
    
    return (
    <div className='modal_background'>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Start Your Journey Now
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Through our intensive program, we train adults with the most need and potential to get their first tech jobs, advance in their careers, and become the next generation of leaders in tech. Our graduates are hired by leading companies like Pinterest, Uber, LinkedIn, BlackRock, and Twitter, and increase their average annual salaries from $18,000 to over $85,000.
          <a href="https://www.pursuit.org/fellowship?utm_medium=ppc&utm_source=adwords&utm_campaign=Branded+Terms+(MC)&utm_term=pursuit" target="_blank" rel="noreferrer"><Button>Launch Your Career!</Button></a>
          </Typography>
        </Box>
      </Modal>
    </div>

    );
};

export default AdModal;