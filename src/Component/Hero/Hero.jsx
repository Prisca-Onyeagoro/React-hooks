import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import Card from './Card';

const StyledBox = styled(Box)({
  backgroundImage:
    'url(https://media.istockphoto.com/photos/aerial-view-of-residential-houses-at-autumn-american-neighborhood-picture-id1181134074?b=1&k=20&m=1181134074&s=170667a&w=0&h=BK9HTd2nX0gKYz1wRHiWrQHE0MTXxAW6yHENhIecJWo=)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  height: 350,
});

const Hero = () => {
  return (
    <StyledBox>
      <Box
        sx={{
          backgroundColor: 'black',
          color: 'white',
          width: '100%',
          height: 350,
          opacity: 0.8,
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: '500',
            // p: { xs: 2, sm: 2, md: 2, lg: 2 },
            fontSize: { xs: '25px', sm: '50px', md: '50px' },
          }}
        >
          Before, Now and Always
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: '600',
            // p: { xs: 2, sm: 2, md: 2, lg: 2 },
            fontSize: { xs: '30px', sm: '50px', md: '50px' },
          }}
        >
          We are here for you.
        </Typography>
      </Box>
    </StyledBox>
  );
};

export default Hero;
