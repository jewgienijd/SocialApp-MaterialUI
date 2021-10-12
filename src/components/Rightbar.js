import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Link from '@mui/material/Link';

const useStyles = makeStyles((theme)=>({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0
  },
  title: {
    color: "#555",
    fontWeight: 500
  },
  linksWrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
  link: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}))

export const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
        <div className={classes.item}>
          <Typography className={classes.title} gutterBottom>
            ONLINE FRIENDS
          </Typography>
          <AvatarGroup max={6} style={{justifyContent:'start'}}>
            <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://mui.com//static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="https://mui.com//static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/5.jpg" />
            <Avatar alt="Trevor Henderson" src="" />
          </AvatarGroup>
        </div>
        <div className={classes.item} style={{marginTop:20}}>
          <Typography className={classes.title} gutterBottom>
            GALLERY
          </Typography>
          <ImageList cols={3} rowHeight={100}>
            <ImageListItem>
              <img 
                src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format`}
                alt={`gallery_img`}
                loading="lazy" />
            </ImageListItem>
            <ImageListItem>
                <img 
                src={`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format`}
                alt={`gallery_img`}
                loading="lazy" />
            </ImageListItem>
            <ImageListItem>
                <img 
                src={`https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format`}
                alt={`gallery_img`}
                loading="lazy" />
            </ImageListItem>
            <ImageListItem>
                <img 
                src={`https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format`}
                alt={`gallery_img`}
                loading="lazy" />
            </ImageListItem>
            <ImageListItem>
                <img 
                src={`https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format`}
                alt={`gallery_img`} 
                loading="lazy"/>
            </ImageListItem>
            <ImageListItem>
                <img 
                src={`https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format`}
                alt={`gallery_img`} 
                loading="lazy"/>
            </ImageListItem>
          </ImageList>
        </div>
        <div className={classes.item} style={{marginTop:20}}>
          <Typography className={classes.title} gutterBottom>
            CATEGORY
          </Typography>
          <div className={classes.linksWrapper}>
            <div className={classes.link}>
              <Link href="#" className={classes.link} underline="none">
                Nature
              </Link>
            </div>
            <div className={classes.link}>
              <Link href="#" className={classes.link} underline="none">
                Food
              </Link>
            </div>
            <div className={classes.link}>
              <Link href="#" className={classes.link} underline="none">
                Music
              </Link>
            </div>
            <div className={classes.link}>
              <Link href="#" className={classes.link} underline="none">
                Cars
              </Link>
            </div>
            <div className={classes.link}>
              <Link href="#" className={classes.link} underline="none">
                Sport
              </Link>
            </div>
            <div className={classes.link}>
              <Link href="#" className={classes.link} underline="none">
                Dogs
              </Link>
            </div>
            <div className={classes.link}>
              <Link href="#" className={classes.link} underline="none">
                Books
              </Link>
            </div>
            <div className={classes.link}>
              <Link href="#" className={classes.link} underline="none">
                Health
              </Link>
            </div>
          </div>
        </div>
    </Container>
  );
}

