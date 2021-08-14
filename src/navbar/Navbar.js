import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link, NavLink } from 'react-router-dom';
import styles from './styles/navbar.module.css';
import LogOut from '../log-out/LogOut';
import FacilityOverview from '../facility-overview/FacilityOverview';
import AppointmentsPage from '../../pages/appointments-page/AppointmentsPage';
import LogInPage from '../../pages/log-in-page/LogInPage';
import FacilityShowPage from '../../pages/facility-Show-page/FacilityShowPage';
import SignInPage from '../../pages/sign-in-page/SignInPage';
import useStyles from './styles/animation';

const Navbar = () => (
  <div />

);
