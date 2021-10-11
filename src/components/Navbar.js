import React, { useState } from 'react';
import { makeStyles} from '@mui/styles';
import { alpha } from '@mui/material/styles';
import { AppBar,InputBase,Toolbar,Typography,Badge, Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles((theme)=>({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? "flex" : "none"),
            width: "70%"
        }
    },
    input: {
        marginLeft: theme.spacing(1),
        color: "white"
    },
    searchBtn: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }      
    },
    icons: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            display: (props) => (props.open ? "none" : "flex")
        }
    },
    cancelBtn: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        } 
    },
    badge: {
        marginRight: theme.spacing(2)
    }
}))

export const Navbar = () => {
  const [open,setOpen] = useState(false);
  const classes = useStyles({open});
  return (
    <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            Material App
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            App
          </Typography>
          <div className={classes.search}>
              <SearchIcon/>
              <InputBase className={classes.input} placeholder="Search..."/>
              <div className={classes.cancelBtn}>
                  <CancelIcon onClick={()=>setOpen(false)}/>
              </div>
          </div>
          <div className={classes.icons}>
              <div className={classes.searchBtn}>
              <SearchIcon onClick={()=>setOpen(true)} />
              </div>
              <Badge badgeContent={4} color="secondary" className={classes.badge}>
                 <MailIcon />
              </Badge>
              <Badge badgeContent={2} color="secondary" className={classes.badge}>
                 <NotificationsNoneIcon />
              </Badge>
              <Avatar alt="Avatar" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
          </div>
        </Toolbar>
    </AppBar>
  );
}

