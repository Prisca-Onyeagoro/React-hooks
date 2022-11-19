import React from 'react';
import Products from '../Components/Product';

import { Link, useParams } from 'react-router-dom';
import { Grid, Box, Button } from '@mui/material';
import Rating from '../Components/Rating';
import ProductCardDetails from '../Components/ProductCardDetails';
import CartCard from '../Components/CartCard';

const ProductScreen = () => {
  const { id } = useParams();
  const product = Products.find((p) => p._id.toString() === id);
  if (!product) return 'Product not found';
  return (
    <Box>
      <Button as={Link} to="/" variant="contained">
        Go Back
      </Button>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ProductCardDetails product={product} />
        </Grid>
        <Grid item xs={4}>
          <CartCard product={product} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductScreen;
