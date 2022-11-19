import React from 'react';

import { Box, styled } from '@mui/material';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomeScreen from './Screen/HomeScreen';

const StyledBox = styled(Box)({
  marginLeft: 20,
  paddingTop: 5,
});

const App = () => {
  return (
    <>
      <Navbar />

      <StyledBox>
        <Box>
          <HomeScreen />
        </Box>
      </StyledBox>

      <Footer />
    </>
  );
};

export default App;
