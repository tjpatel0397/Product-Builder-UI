import React, {forwardRef} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/ButtonBase';
import { NavLink as RouterLink } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';

import AccessTimeIcon from '@material-ui/icons/AccessTime';


const useStyles = makeStyles(theme => ({
    root: {
      height: 100,
      margin: 25
    },
    infoContainer:{
      height: 250,
      width: 485
      
      
    },
  
    dividerClass:{
      padding: 0,
      margin: 0
      
      
    },
    
    imageContainer: {
      height: 64,
      width: 64,
      margin: '0 auto',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: '5px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: '100%'
    },
    statsItem: {
      display: 'flex',
      alignItems: 'center',
      height: 275,
      padding: 0,
      margin: 0
      
    },
    statsIcon: {
      color: theme.palette.icon,
      marginRight: theme.spacing(1)
    }
}));
  

const ProductPage = props => {
    const { className, ...rest } = props;
  
    const classes = useStyles();
  
    return (
      <Card
        
        {...rest}
        className={clsx(classes.root, className)}
       
      >
      
     
      </Card>
    );
  };
  
  ProductPage.propTypes = {
    className: PropTypes.string,
  
  };
  
export default ProductPage;