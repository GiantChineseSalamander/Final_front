import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SaveIcon from '@mui/icons-material/Save';
import Icon1 from '@mui/icons-material/BakeryDining'; // replace with actual icons
import Icon2 from '@mui/icons-material/LocalDining'; // replace with actual icons
import Icon3 from '@mui/icons-material/LunchDining'; // replace with actual icons


const FoodCard = () => {
  return (
    <Card sx={{ width: 300, position: 'relative' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" height={60}>
        <Box component="img" src="/img/Food-icons/kale.png" sx={{ height: 40, width: 40 }} />
        <Typography variant="h5" component="div"textAlign="left">Tofu tikka masala</Typography>
            <Typography variant="body2" color="text.secondary"textAlign="left">Plant-based spicy goodness</Typography>
            </Box>
      <CardMedia
        component="img"
        height="140"
        image="/img/curry.jpg" // Replace with your image path
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Box sx={{height:200, overflowY:"auto"}}>
          <Typography variant="body2" color="text.secondary">
          I put mushrooms in the recipe to show how the allergenes block looks note to self remember that this is supposed to be scrollable with fade effect and hidden navbar
        </Typography></Box>
               </Grid>
          <Grid item xs={4} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly" alignContent="flex-start">
            <Icon1 />
            <Icon2 />
            <Icon2 />
            <Icon2 />
            <Icon2 />
            <Icon2 />
          </Grid>
        </Grid>
        
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Button size="small" color="primary" startIcon={<SaveIcon />}>
          Save
        </Button>
        <Button size="small" color="primary" endIcon={<ShoppingCartIcon />}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default FoodCard;