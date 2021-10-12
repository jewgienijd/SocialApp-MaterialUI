import React from 'react';
import { makeStyles } from '@mui/styles';
import { Post } from './Post';
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
         <Post
           img={`https://m.autokult.pl/tesla-model-x-facelift-2-c6d16f8,910,500,0,0.jpg`} 
           title={`Tesla X 2021`}
           text={`Although the Model X debuted over five years ago, it's still essentially a unicorn in the market. Even if you take its showstopping falcon-wing rear doors out of the equation, no other SUV — electric or otherwise — can match the Model X's acceleration. Throw in its impressive 360 miles of estimated driving range and you really do have a one-of-a-kind vehicle.`}
           alt={`tesla-card`}
         />
         <Post
           img={`https://lacuisinedegeraldine.fr/wp-content/uploads/2021/06/Pancakes-04483-2-scaled.jpg`}
           title={`Pancakes`}
           text={`A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.`}
           alt={`pancakes-card`}
         />
         <Post
           img={`https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg`} 
           title={`React`}
           text={`React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.`}
           alt={`react-card`}
         />
         <Post
           img={`https://futbol.pl/images/1633853047_fcbarcelona.png`} 
           title={`FC Barcelona`}
           text={`Futbol Club Barcelona, commonly referred to as Barcelona and colloquially known as Barça, is a Spanish professional football club based in Barcelona, Spain, that competes in La Liga, the top flight of Spanish football.`}
           alt={`barcelona-card`}
         />
         <Post
           img={`https://images.photowall.com/products/69237/lion-close-up.jpg?h=699&q=85`} 
           title={`Lion`}
           text={`The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane`}
           alt={`lion-card`}
         />
    </Container>
  );
}

