import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { v5 as uuidv5 } from 'uuid';
import SongsForm from './SongsForm';

const Songs = () => {
  const [song, setSong] = useState([
    { title: 'Oh fire', id: 1 },
    { title: 'i love jeus', id: 2 },
    { title: 'haleluyah', id: 3 },
  ]);
  const Add = (title) => {
    setSong([...song, { title: title, id: uuidv5 }]);
  };
  useEffect(() => {
    document.title = 'UseState Hook';
  });
  return (
    <>
      <Box>
        {song.map((songs) => {
          return (
            <>
              <Typography key={songs.id}>{songs.title}</Typography>
            </>
          );
        })}
        <SongsForm Add={Add} />
      </Box>
    </>
  );
};

export default Songs;
