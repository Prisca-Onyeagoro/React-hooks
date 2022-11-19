import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function CartCard({ product }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Price: ${product.price}
        </Typography>
        <Typography variant="h5" component="div">
          Status:{' '}
          {product.countinstock > 0
            ? `${product.countinstock} ${product.name} in stock`
            : `${product.name} out of stock`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          disabled={product.countinstock === 0}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
