import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import BoxIcon from './SidebarIcons/box.svg';
import ReportIcon from './SidebarIcons/reports.svg';
import AdminIcon from './SidebarIcons/admin.svg';
import ReportIcon2 from './SidebarIcons/reports-2.svg';
import ReportIcon3 from './SidebarIcons/reports-3.svg';
import ReportIcon4 from './SidebarIcons/reports-4.png';
import DashboardIcon2 from './SidebarIcons/dashboard1.png';
import SettingsIcon2 from './SidebarIcons/settings2.png';
import AdminIcon2 from './SidebarIcons/admin.png';
import AdminIcon3 from './SidebarIcons/admin3.svg';
import FormsIcon from './SidebarIcons/forms.png';
import FormsIcon2 from './SidebarIcons/forms2.png';
import FormsIcon3 from './SidebarIcons/forms3.svg';
import DashboardIcon3 from './SidebarIcons/dashboard9.svg';
import './Sidebar.css';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <img className="sidebar-icon" src={DashboardIcon3}></img>
    },
    {
      title: 'Products',
      href: '/products',
      icon: <img className="sidebar-icon" src={BoxIcon}></img>
    },
    {
      title: 'Reports',
      href: '/settings',
      icon: <img className="sidebar-icon" src={ReportIcon}></img>
    },
    {
      title: 'Forms',
      href: '/settings',
      icon: <img className="sidebar-icon" src={FormsIcon3}></img>
    },
    {
      title: 'Users',
      href: '/users',
      icon: <PeopleIcon />
    },
    {
      title: 'Administration',
      href: '/settings',
      icon: <img className="sidebar-icon" src={AdminIcon3}></img>
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <img className="sidebar-icon" src={SettingsIcon2}></img>
    }
   
    
  
  
    
   
   
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      >
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
