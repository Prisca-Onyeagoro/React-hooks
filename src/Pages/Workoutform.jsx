import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

const Workoutform = () => {
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState(0);
  const [load, setLoad] = useState(0);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respons = await axios
        .post('http://localhost:4000/api/workout/create', {
          title,
          reps,
          load,
        })
        .then(() => {
          setTitle('');
          setReps(0);
          setLoad(0);
          window.location.reload();
        });
      const data = await respons.json;
      return data;
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" sx={{ fontWeight: '900' }}>
            Exercise Title:
          </Typography>
          <TextField
            margin="normal"
            id="filled-basic"
            label="Exercise Title"
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Typography variant="h4" sx={{ fontWeight: '900' }}>
            Loads(Kg):
          </Typography>
          <TextField
            type="number"
            margin="normal"
            id="filled-basic"
            label="Load(Kg)"
            variant="filled"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
          />
          <Typography variant="h4" sx={{ fontWeight: '900' }}>
            Reps:
          </Typography>
          <TextField
            type="number"
            margin="normal"
            id="filled-basic"
            label="Reps"
            variant="filled"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
          <Box>
            <Button
              sx={{ marginTop: '20px' }}
              type="submit"
              variant="contained"
            >
              Add New Workout
            </Button>
          </Box>
          {error && <Typography color="red">{error}</Typography>}
        </form>
      </Box>
    </>
  );
};

export default Workoutform;
