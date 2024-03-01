import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Grid } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Icon1 from '@mui/icons-material/BakeryDining'; // replace with actual icons
import Icon2 from '@mui/icons-material/LocalDining'; // replace with actual icons
import Icon3 from '@mui/icons-material/LunchDining'; // replace with actual icons
import BookmarkIcon from '@mui/icons-material/Bookmark';


const FoodCard = () => {
  return (
    <Card  elevation={5} sx={{ width: 250, position: 'relative', p: 1, borderRadius: 8}}>
        <Box display="flex" justifyContent="space-between" alignItems="center" height={60}>
        <Box component="img" src="/img/Food-icons/kale.png" sx={{ height: 40, width: 40 }} />
        <Box display="flex" flexDirection="column"><Typography variant="h5" component="div"textAlign="left">Tofu tikka masala</Typography>
            <Typography variant="body2" color="text.secondary"textAlign="left">Plant-based spicy goodness</Typography>
            </Box>
            </Box>
      <CardMedia
        component="img"
        height="140"
        image="/img/curry.jpg"
        
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Box sx={{height:140, overflowY:"auto", '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none','-ms-overflow-style': 'none'}}>
          <Typography variant="body2" color="text.secondary">
          I put mushrooms in the recipe to show how the allergenes block looks note to self remember that this is supposed to be scrollable with fade effect and hidden navbar except for some reason this text is too short lmao lol kek why doesn't vscode text wrap, this feels inefficient somehow
        </Typography></Box>
               </Grid>
          <Grid style={{color: '#9adc90ff' }} item xs={4} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly" alignContent="flex-start">
            <Icon1 />
            <Icon2 />
            <Icon2 />
            <Icon2 />
            <Icon3 />
            <Icon2 />
          </Grid>
        </Grid>
      </CardContent>

      <CardActions>
      <Box sx={{ display:"flex", justifyContent:"flex-end"}}>
      <Button  style={{color: '#253f3fff' }} variant="text"startIcon={<BookmarkIcon style={{color: '#9adc90ff' }}/>}>Save</Button>
      <Button size="small" variant= "contained" color="primary" style={{backgroundColor: '#9adc90ff' }} startIcon={<ShoppingBasketIcon style={{color: 'white' }}/>}>Add to Cart</Button>
      </Box>
      </CardActions>
    </Card>
  );
};

export default FoodCard;