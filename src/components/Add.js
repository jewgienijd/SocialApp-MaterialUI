import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Tooltip, Fab, Modal, Container,TextField, MenuItem, RadioGroup, FormControlLabel, Radio, FormLabel, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'


const useStyles = makeStyles((theme)=>({
    addBtn: {
        position: 'fixed',
        bottom: 20,
        right: 20        
    },
    container: {
        height: 550,
        width: 400,
        backgroundColor: "white",
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "100vw",
            height: "100vh"
        }
    },
    form: {
        padding: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1)
        }
    },
    item: {
        marginBottom: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(1)
        }
    }  
}))

export const Add = () => {
  const classes = useStyles();
  const [open,setOpen] = useState(false);
  return (
    <div className={classes.addBtn}>
      <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
        <Fab color="primary" >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
          <Container className={classes.container}>
              <form className={classes.form} autoComplete="off">
                  <div class={classes.item}>
                    <TextField 
                      id="standard-basic"  
                      label="Title" 
                      variant="standard"
                      style={{width:"100%"}} />
                  </div>
                  <div class={classes.item}>
                    <TextField 
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      placeholder="Write your post"
                      style={{width:"100%"}} />
                  </div>
                  <div class={classes.item}>
                    <TextField 
                      select
                      id="outlined-select"  
                      label="Visibility"
                      value="Public"
                      style={{width:"100%"}} 
                      >
                          <MenuItem value="Public">Public</MenuItem>
                          <MenuItem value="Private">Private</MenuItem>
                          <MenuItem value="Unlisted">Unlisted</MenuItem>
                      </TextField>
                  </div>
                  <div class={classes.item}>
                      <FormLabel component="whocomment">Who can comment?</FormLabel>
                      <RadioGroup
                        aria-label="comments"
                        defaultValue="everybody"
                        name="radio-buttons-group">
                            <FormControlLabel value="everybody" control={<Radio />} label="Everybody"/>
                            <FormControlLabel value="friends" control={<Radio />} label="Only friends"/>
                            <FormControlLabel value="nobody" control={<Radio />} label="Nobody"/>
                        </RadioGroup>
                  </div>
                  <div class={classes.item}>
                      <Button 
                        variant="outlined"
                        color="primary"
                        style={{marginRight:20}}> 
                        Add
                      </Button>
                      <Button 
                        onClick={()=>setOpen(false)}
                        variant="outlined"
                        color="error">
                        Exit
                      </Button>
                  </div>
              </form>
          </Container>
      </Modal>
    </div>
  )
}
