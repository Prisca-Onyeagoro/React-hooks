import { Box, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontWeight: '900', textAlign: 'center' }}>
        Fashions<b style={{ color: 'red' }}>Blog</b>{' '}
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontWeight: '100', textAlign: 'center' }}
      >
        We make you look better
      </Typography>
      <Box
        sx={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '40%' },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: 'white', opacity: '0.8' }}>
            <Typography variant="h6" color="tomato" align="center" pt={8}>
              Featured fashions
            </Typography>
            <Typography variant="h4" align="center">
              Look Good Today
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              We love to fashion your look
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
