import {
  Box,
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import Rating from './Rating';

const ProductCardDetails = ({ product }) => {
  return (
    <Box>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {product.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {product.description}
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
              {product.price}
            </Typography>
          </CardContent>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === 'rtl' ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box> */}
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300, marginLeft: 10 }}
          image={product.images}
          alt={product.name}
        />
      </Card>
    </Box>
  );
};

export default ProductCardDetails;
