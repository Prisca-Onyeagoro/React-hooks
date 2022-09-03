import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Card = ({ cardImage }) => {
  return (
    <Box>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={cardImage}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body1"
          align="center"
          component="div"
          color="tomato"
        >
          Accessories
        </Typography>
        <Typography gutterBottom variant="h5" align="center" component="div">
          Look Beautiful and Attractive For Everyone.
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          align="center"
          component="div"
          color="text.secondary"
        >
          Everyone Loves Fashion
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          repellendus, Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor, dolore.
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Card;
