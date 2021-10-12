import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme)=>({
  container: {
    paddingTop: theme.spacing(10),
    backgroundColor: "#27d",
    height: "100vh",
    color: "#fff",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: "#fff",
      color: "#555",
      border: "1px solid #ece7e7" 
    }
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(4),
      cursor: "pointer",
    }
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  text: {
    fontWeight: "500",
    [theme.breakpoints.down('sm')]: {
      display: "none"
    }
  }
}))

export const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Home</Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div> 
      <div className={classes.item}>
        <ListIcon className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div> 
      <div className={classes.item}>
        <PhotoCameraIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div> 
      <div className={classes.item}>
        <PlayCircleOutlineIcon className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div> 
      <div className={classes.item}>
        <TabletMacIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div> 
      <div className={classes.item}>
        <BookmarkIcon className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div> 
      <div className={classes.item}>
        <StorefrontIcon className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div> 
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div> 
      <div className={classes.item}>
        <ExitToAppIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>         
    </Container>
  );
}
