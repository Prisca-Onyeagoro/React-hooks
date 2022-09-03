import React from 'react';

import { Box, Grid } from '@mui/material';
import Card from '../Card/Card';

const Recent = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
        <Grid item>
          <Card cardImage="https://images.unsplash.com/photo-1446214814726-e6074845b4ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjB3ZWFyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        </Grid>

        <Grid item md={6} xs={12}>
          <Card
            cardImage={
              'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            }
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card
            cardImage={
              'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            }
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card
            cardImage={
              'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            }
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Card
            cardImage={
              'https://images.unsplash.com/photo-1597557314810-9963a48c188d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recent;
