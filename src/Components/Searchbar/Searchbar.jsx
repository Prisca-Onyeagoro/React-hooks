import React from 'react';
import { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import { Box } from '@mui/material';
import Search from '@mui/icons-material/Search';

const Searchbar = ({ setSearchQuery }) => {
  return (
    <Box>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter a city name"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
    </Box>
  );
};

export default Searchbar;
