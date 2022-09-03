import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ background: 'black', height: '300px' }}>
      <Stack direction={{ xs: 'row', md: 'row' }} p={7}>
        <Box flex={1}>
          <Typography color={'white'} align="center">
            Contact Us
          </Typography>
          <Typography color={'white'} align="center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus,
            esse.
          </Typography>
          <Typography color={'white'} align="center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ea?
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={'white'} align="center">
            Data policy
          </Typography>
          <Typography color={'white'} align="center">
            cookies
          </Typography>
          <Typography color={'white'} align="center">
            Data Safety
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={'white'} variant="body2" align="center">
            Categories
          </Typography>
          <Typography color={'white'} variant="body2" align="center">
            Kids
          </Typography>
          <Typography color={'white'} variant="body2" align="center">
            Women
          </Typography>
          <Typography color={'white'} variant="body2" align="center">
            Men
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
