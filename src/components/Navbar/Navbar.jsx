import React from 'react';
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from '@mui/icons-material';
import { useState } from 'react';

const StyledToobar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between ',
});
const SocialBox = styled(Box)({
  display: 'flex',
  gap: 10,
});
const MenuBox = styled(Box)({
  display: 'flex',
  gap: 30,
});
const MenuItems = [
  { Name: 'Home', Link: '/' },
  { Name: 'Products', Link: '#' },
  { Name: 'Portfolio', Link: '#' },
  { Name: 'Blog', Link: '#' },
  { Name: 'Contact us', Link: '#' },
];
const SearchBox = styled(Box)({
  display: 'flex',
  gap: 5,
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
        <StyledToobar>
          {/* social Icons */}
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
          <MenuBox sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            {MenuItems.map((Item) => {
              return (
                <>
                  <Typography sx={{ cursor: 'pointer', fontSize: '14px' }}>
                    {Item.Name}
                  </Typography>
                </>
              );
            })}
          </MenuBox>
          <SearchBox>
            <InputBase placeholder="search...." sx={{ color: 'white' }} />
            <MenuIcon
              sx={{
                color: 'white',
                display: { xs: 'block', sm: 'block', md: 'none' },
              }}
              onClick={() => setOpen(!open)}
            />
          </SearchBox>
        </StyledToobar>
        <Menu
          id="basic-menu"
          open={open}
          onClose={() => setOpen(!open)}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Box sx={{ width: 350, height: '90vh' }}>
            {MenuItems.map((Item) => {
              return (
                <>
                  <MenuItem sx={{ cursor: 'pointer', fontSize: '14px' }}>
                    {Item.Name}
                  </MenuItem>
                </>
              );
            })}
          </Box>
        </Menu>
      </AppBar>
    </>
  );
};

export default Navbar;
