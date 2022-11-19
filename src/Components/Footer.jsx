import { Box, styled, Typography } from '@mui/material';
import React from 'react';
const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  bottom: -500,
});

const Footer = () => {
  return (
    <>
      <StyledBox>
        <Typography varaint="h4" color="red">
          Copyright &copy;
        </Typography>
      </StyledBox>
    </>
  );
};

export default Footer;
