import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme)=>({
  container: {
    paddingTop: theme.spacing(10)
  }
}))

export const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
         FEED
    </Container>
  );
}

