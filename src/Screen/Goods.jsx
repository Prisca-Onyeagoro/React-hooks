import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '../Components/Rating';
import { Link } from 'react-router-dom';

const Goods = ({ Product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/product/${Product._id}`}>
        <CardMedia
          component="img"
          height="200"
          image={Product.images}
          alt={Product.name}
        />
      </Link>

      <CardContent>
        <Link to={`/product/${Product._id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {Product.name}
          </Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
          <Rating
            value={Product.rating}
            text={`${Product.numReviews} reviews`}
          />
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${Product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};
Rating.defaultProps = {
  color: 'red',
};
export default Goods;
