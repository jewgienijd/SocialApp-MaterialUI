import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Navbar } from './components/Navbar';
import { Leftbar } from './components/Leftbar';
import { Rightbar } from './components/Rightbar';
import { Feed } from './components/Feed';

const useStyles = makeStyles((theme)=>({
  rightMenu: {
    [theme.breakpoints.down('sm')]: {
      display: "none"
    }
  }
}))

const App = () => {
  const classes = useStyles();
  return (
    <div>
         <Navbar />
         <Grid container>
           <Grid item sm={2} xs={2}>
             <Leftbar />
           </Grid>
           <Grid item sm={7} xs={10}>
             <Feed />
           </Grid>
           <Grid item sm={3} className={classes.rightMenu}>
             <Rightbar />
           </Grid>
         </Grid>
    </div>
  );
}

export default App;
