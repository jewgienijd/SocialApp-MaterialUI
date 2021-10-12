import React from 'react';
import { makeStyles } from '@mui/styles';
import { Tooltip, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'


const useStyles = makeStyles((theme)=>({
    addBtn: {
        position: 'fixed',
        bottom: 20,
        right: 20        
    }  
}))

export const Add = () => {
  const classes = useStyles();
  return (
      <div className={classes.addBtn}>
      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" >
          <AddIcon />
        </Fab>
      </Tooltip>
      </div>
    )
}
