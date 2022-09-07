import React from 'react';
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  Button,
  Tabs,
  Tab,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Drawer from './Drawer';
import LAccordion from '../Accordion';
// custome breakpoints

// Toolbar
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const StyledTypography = styled(Typography)({
  display: 'flex',
  justifyContent: 'space-between',
  color: 'black',
  fontSize: '20px',
  fontWeight: '900',
});
const StyledBox = styled(Box)({
  display: 'flex',
  gap: 4,
  padding: 20,
});
const styles = {
  '&.MuiButton-root': {
    border: '2px black solid',
  },
  '&.MuiButton-text': {
    color: 'black',
  },
  '&.MuiButton-contained': {
    color: 'white',
    backgroundColor: 'red',
  },
  '&.MuiButton-outlined': {
    border: '1px red solid',
    color: 'black',
  },
  display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
};
const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white' }}>
      <StyledToolbar>
        {/* LOGO */}
        <Box>
          <StyledTypography variant="h2">
            <bold style={{ color: 'blue' }}>Home</bold>
            <bold
              style={{
                fontSize: 'large',
                color: 'yellow',
                lineHeight: 'normal',
              }}
            >
              for
            </bold>
            <bold style={{ color: 'red' }}>Heroes</bold>
          </StyledTypography>
        </Box>
        {/* Link Tabs */}
        <StyledBox>
          <Tabs>
            <Tab
              label="About"
              component={Link}
              to="/"
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
              }}
            />
            <Tab
              label="Hero Rewards"
              component={Link}
              to="/"
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
              }}
            />
            <Tab
              label="Hero Reviews"
              component={Link}
              to="/"
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
              }}
            />
            <Tab
              label="FAQ"
              component={Link}
              to="/"
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
              }}
            />
            <Tab
              label="Blog"
              component={Link}
              to="/"
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
              }}
            />
            <Tab
              label="Foundation"
              component={Link}
              to="/"
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
              }}
            />
          </Tabs>

          {/* <Box>
            <LAccordion />
          </Box> */}

          {/* Buttons as link */}
          <Button variant="outlined" sx={styles}>
            Agents and Leaders
          </Button>
          <Button variant="contained" sx={styles}>
            Start Saving Now
          </Button>
          <Drawer />
        </StyledBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
