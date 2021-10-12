import { Alert, Snackbar } from '@mui/material';
import React from 'react';

export const SnackbarAlert = (props) => {
    const {openSnack, setOpenSnack} = props;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnack(false);
      };

    return (
        <Snackbar open={openSnack} autoHideDuration={4000} onClose={handleClose} >
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Your post was published successfully!
          </Alert>
        </Snackbar>
    )
}