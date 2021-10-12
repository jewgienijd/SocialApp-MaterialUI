import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme)=>({
    card: {
      marginBottom: theme.spacing(5)
    },
    image: {
        height: 250,
        [theme.breakpoints.down('sm')]: {
          height: 150
      } 
    }  
}))

export const Post = (props) => {
  const {img, title, text, alt} = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardMedia
        className={classes.image} 
        component="img"
        image={img}
        alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
  );
}