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
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme => ({
  root: {
    height: 300,
    width: 485
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


const ProductCardRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));



const ProductCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      
      {...rest}
      className={clsx(classes.root, className)}
     
    >
    <Button  component={ProductCardRouterLink} to={"/settings"}>
      

    <CardContent className={classes.infoContainer}>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {product.description}
        </Typography>
      </CardContent>
      <Divider className={classes.dividerClass} />
     
     
    </Button>
    
    <CardActions>
        <Grid
          container
          justify="space-between"
        >
       
          <Grid
            className={classes.statsItem}
            item
          >
          
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              Updated 2hr ago
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            
            <Typography
              display="inline"
              variant="body2"
            >
             
            </Typography>
          </Grid>
        </Grid>
    </CardActions>
   
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
