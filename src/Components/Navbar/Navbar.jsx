import React from 'react';
import { Box, AppBar, Toolbar, Typography, styled } from '@mui/material';
import Searchbar from '../Searchbar/Searchbar';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { FormDialog, LoginDialog } from './FormDialog';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 50,
  fontWeight: 600,
  fontFamily: 'Arial Black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    fontWeight: 600,
    fontSize: 30,
  },
  [theme.breakpoints.down('sm')]: {
    fontWeight: 600,
    fontSize: 17,
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    gap: 6.8,
    padding: 4,
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const SearchBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const SearcherBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'whitesmoke' }}>
      <StyledToolbar>
        <SearchBox>
          <Searchbar />
        </SearchBox>
        <Box>
          <StyledTypography
            color="blue"
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
            }}
          >
            <Link to="/">WORK OUT</Link>
          </StyledTypography>
          <Box display="flex" gap={18}>
            <StyledTypography
              color="blue"
              sx={{
                display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' },
              }}
            >
              <Link to="/">WORK OUT</Link>
            </StyledTypography>
            <SearcherBox>
              <Searchbar />
            </SearcherBox>
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', gap: 2, color: 'blue' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography
                sx={{
                  display: {
                    xs: 'none',
                    sm: 'none',
                    md: 'none',
                    lg: 'none',
                  },
                }}
              >
                Create&Sign In
              </Typography>
              <FormDialog />
            </Box>
            <LoginDialog />
            <ShoppingCart />
          </Box>
        </Box>
      </StyledToolbar>
      {/* Advertising Brands */}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 1, sm: 2, lg: 7 },
        }}
      >
        <Typography variant="h4" color="blue" fontSize={19} fontWeight="400">
          Apple
        </Typography>
        <Typography variant="h4" color="blue" fontSize={19} fontWeight="400">
          Google
        </Typography>
        <Typography
          variant="h4"
          color="blue"
          fontSize={19}
          fontWeight="400"
          sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' } }}
        >
          Jumia
        </Typography>
        <Typography variant="h4" color="blue" fontSize={19} fontWeight="400">
          Konga
        </Typography>

        <Typography variant="h4" color="blue" fontSize={19} fontWeight="400">
          Binatone
        </Typography>
      </Box>
      {/* Products sale */}

      <StyledBox
        sx={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          marginTop: 2,
          padding: 2,
        }}
      >
        <Typography>Furnitures</Typography>
        <Typography>Books</Typography>
        <Typography>Electronics</Typography>
        <Typography>AutoMobile</Typography>
        <Typography>Estates</Typography>
        <Typography>Gadgets</Typography>
        <Typography>Furnitures</Typography>
        <Typography>Books</Typography>
        <Typography>Electronics</Typography>
        <Typography>AutoMobile</Typography>
        <Typography>Estates</Typography>
        <Typography>Gadgets</Typography>
      </StyledBox>
    </AppBar>
  );
};

export default Navbar;
