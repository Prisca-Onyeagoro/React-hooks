import React from 'react';
import HowToReg from '@mui/icons-material/HowToReg';
import ShoppingCartCheckout from '@mui/icons-material/ShoppingCartCheckout';
import {
  AppBar,
  Box,
  Button,
  Container,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
  background: 'black',
});

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
});
const StyledTypography = styled(Typography)({});
const StyledBox = styled(Box)({
  display: 'flex',
  gap: 10,
});

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <StyledContainer fixed>
            <Box>
              <StyledTypography>E-Commerce</StyledTypography>
            </Box>
            <StyledBox>
              <Button as={Link} to="/cart" sx={{ color: 'white' }}>
                Cart
                <ShoppingCartCheckout />
              </Button>
              <Button as={Link} to="/signin" sx={{ color: 'white' }}>
                Sign in
                <HowToReg />
              </Button>
            </StyledBox>
          </StyledContainer>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
