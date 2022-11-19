import { Box } from '@mui/material';
import React from 'react';
import Star from '@mui/icons-material/Star';
import StarHalf from '@mui/icons-material/StarHalf';
import StarOutline from '@mui/icons-material/StarOutline';

const Rating = ({ value, text, color }) => {
  return (
    <Box>
      <span>
        {value >= 1 ? (
          <Star sx={{ color }} />
        ) : value >= 0.5 ? (
          <StarHalf sx={{ color: 'red' }} />
        ) : (
          <StarOutline />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <Star sx={{ color }} />
        ) : value >= 1.5 ? (
          <StarHalf sx={{ color }} />
        ) : (
          <StarOutline />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <Star sx={{ color }} />
        ) : value >= 2.5 ? (
          <StarHalf sx={{ color }} />
        ) : (
          <StarOutline />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <Star sx={{ color }} />
        ) : value >= 3.5 ? (
          <StarHalf sx={{ color }} />
        ) : (
          <StarOutline />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <Star sx={{ color }} />
        ) : value >= 4.5 ? (
          <StarHalf sx={{ color }} />
        ) : (
          <StarOutline />
        )}
      </span>

      <span>{text && text}</span>
    </Box>
  );
};

export default Rating;
