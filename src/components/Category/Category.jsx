import React from 'react';
import { Box, Stack, styled, Typography } from '@mui/material';

const StyledBox = styled(Box)({
  height: 200,
  width: '100%',
  cursor: 'pointer',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center, center',
});
const StyledTypography = styled(Typography)({
  margin: '25% 50px 25% 50px',
  backgroundColor: 'white',
  opacity: '0.8',
});
const category = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 0.8, md: 4 }}
        mt={5}
      >
        <StyledBox
          sx={{
            backgroundImage:
              'url(https://media.istockphoto.com/photos/chilling-before-class-starts-picture-id875614000?b=1&k=20&m=875614000&s=170667a&w=0&h=2E34eWx3FmFecH5KrpPNSDGQXHpGAGZ8PHC5k6Xo_Gs=)',
          }}
        >
          <StyledTypography variant="h3" align="center">
            Kids
          </StyledTypography>
        </StyledBox>
        <StyledBox
          sx={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)',
          }}
        >
          <StyledTypography variant="h3" align="center">
            Men
          </StyledTypography>
        </StyledBox>
        <StyledBox
          sx={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)',
          }}
        >
          <StyledTypography variant="h3" align="center">
            Women
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default category;
