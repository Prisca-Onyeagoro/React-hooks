import {
  Box,
  Button,
  CardActions,
  CardContent,
  Divider,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import React from 'react';
import LAccordion from '../Accordion';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'whitesmoke',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  top: -100,
  position: 'relative',
  width: '60%',
  left: 300,
  right: 300,
  border: '1px blue solid',

  [theme.breakpoints.down('lg')]: {
    left: 200,
    right: 200,
  },
  [theme.breakpoints.down('md')]: {
    left: 150,
    right: 150,
  },
  [theme.breakpoints.down('sm')]: {
    left: 40,
    right: 40,
    width: '87%',
  },
  [theme.breakpoints.down('sm')]: {
    left: 4,
    right: 4,
    width: '93%',
  },
}));

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

    padding: 2,
  },
  '&.MuiButton-outlined': {
    border: '1px black solid',
    color: 'black',
  },
  //   display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
};

const styleb = {
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
    color: 'red',
    padding: 2,
    width: 200,
  },
  //   display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },
};

const Card = () => {
  return (
    <StyledBox>
      <Box p={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 900,
            color: '#003366',
            textAlign: 'center',
            marginBottom: 3,
          }}
        >
          Get Your Hero Rewards Here{' '}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'blue',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet
          quis atque nesciunt quod! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Delectus amet quis atque nesciunt quod!
        </Typography>

        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          <Button variant="outlined" sx={styles}>
            I am a:
          </Button>
          <Button variant="outlined" sx={styles}>
            I am interested in:
          </Button>
          <Button variant="contained" sx={styles}>
            Continue
          </Button>
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: '#003366',
              textAlign: 'center',
              marginTop: 3,
            }}
          >
            Lorem ipsum dolor sit amet consectetur
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              color: '#003366',
              textAlign: 'center',

              marginBottom: 3,
            }}
          >
            $ 10002456778908423
          </Typography>
          <Typography variant="body1" sx={{ color: 'blue' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            repudiandae laudantium dolores distinctio totam tempore blanditiis
            eos, sequi amet et.
          </Typography>
          <Box textAlign={'center'} sx={{ marginTop: 4 }}>
            <Button variant="outlined" sx={styleb}>
              <Typography variant="h5"> PLAY VIDEO</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default Card;
