import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Workoutdetails from './Workoutdetails';
import Workoutform from './Workoutform';
import DeleteForever from '@mui/icons-material/DeleteForever';

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios.get(
        'http://localhost:4000/api/workout/getall'
      );
      setWorkouts(response);
    };
    fetchWorkouts();
  }, []);
  const DeleteWorkout = async (id) => {
    await axios
      .delete(`http://localhost:4000/api/workout/delete/${id}`)
      .then(() => window.location.reload());
  };
  return (
    <>
      <Box sx={{ display: 'flex', gap: 20 }}>
        <Box>
          {workouts &&
            workouts?.data.map((workout) => {
              return (
                <>
                  <Box
                    sx={{
                      backgroundColor: 'whitesmoke',
                      width: 390,
                      marginLeft: 20,
                      marginTop: 10,
                    }}
                  >
                    <Box sx={{ padding: 9 }}>
                      <Typography key={workout._id} color="red">
                        {workout.title}
                        <IconButton
                          onClick={() => DeleteWorkout(workout._id)}
                          sx={{ marginLeft: 20, color: 'red' }}
                        >
                          <DeleteForever />
                        </IconButton>
                      </Typography>
                      <Workoutdetails key={workout._id} workout={workout} />
                    </Box>
                  </Box>
                </>
              );
            })}
        </Box>
        <Box>
          <Workoutform />
        </Box>
      </Box>
    </>
  );
};

export default Home;
