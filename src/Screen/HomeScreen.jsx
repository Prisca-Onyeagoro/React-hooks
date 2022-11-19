import { Grid, styled, Typography } from '@mui/material';
import React from 'react';
import Products from '../Components/Product';
import Goods from './Goods';

const StyledTypography = styled(Typography)({
  fontFamily: 'monospace',
  fontSize: 20,
  fontWeight: 900,
  marginBottom: 20,
});

const HomeScreen = () => {
  return (
    <>
      <StyledTypography varaint="h2">Latest Products</StyledTypography>
      <Grid container spacing={2}>
        {Products.map((Product) => (
          <Grid key={Product._id} item xs={4}>
            <Goods Product={Product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
