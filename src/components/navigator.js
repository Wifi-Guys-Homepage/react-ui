import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DescriptionIcon from '@material-ui/icons/Description';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BuildIcon from '@material-ui/icons/Build';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockIcon from '@material-ui/icons/Lock';
import EditIcon from '@material-ui/icons/Edit';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem onClick={() => { window.location.href='/' }} button={true} key={'Home'}>
            <ListItemIcon><HomeIcon/ ></ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
            <ListItem onClick={() => { window.location.href='/about_me/professional' }} button={true} key={'AboutMe'}>
            <ListItemIcon><AccountCircleIcon/ ></ListItemIcon>
              <ListItemText primary={'All my Skills'} />
            </ListItem>
            <ListItem onClick={() => { window.location.href='/cv' }} button={true} key={'CV'}>
            <ListItemIcon><DescriptionIcon/ ></ListItemIcon>
              <ListItemText primary={'CV and Resume'} />
            </ListItem>
            <ListItem onClick={() => { window.location.href='/about_me/personal' }} button={true} key={'Personal'}>
            <ListItemIcon><SportsEsportsIcon/ ></ListItemIcon>
              <ListItemText primary={'Spare Time'} />
            </ListItem>
            <ListItem onClick={() => { window.location.href='/design' }} button={true} key={'Design'}>
            <ListItemIcon><BuildIcon/ ></ListItemIcon>
              <ListItemText primary={'This Websites Technoogies'} />
            </ListItem>
            <ListItem onClick={() => { window.location.href='/current_projects' }} button={true} key={'CurrentProjects'}>
            <ListItemIcon><AccountTreeIcon/ ></ListItemIcon>
              <ListItemText primary={'Current Projects'} />
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem onClick={() => { window.location.href='/login' }} button={true} key={'Login'}>
            <ListItemIcon><VpnKeyIcon/ ></ListItemIcon>
              <ListItemText primary={'Login'} />
            </ListItem>
            <ListItem onClick={() => { window.location.href='/edit_profile' }} button={true} key={'EditProfile'}>
            <ListItemIcon><EditIcon/ ></ListItemIcon>
              <ListItemText primary={'Edit/Delete Profile'} />
            </ListItem>
            <ListItem onClick={() => { window.location.href='/login' }} button={true} key={'Login'}>
            <ListItemIcon><LockIcon/ ></ListItemIcon>
              <ListItemText primary={'Logout'} />
            </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}

function getPageName(){
    return toTitleCase(window.location.href.split('/')[window.location.href.split('/').length-1].replace('_', ' '))
}

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }