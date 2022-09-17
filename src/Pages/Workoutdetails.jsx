import { Typography } from '@mui/material';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import React from 'react';

const Workoutdetails = ({ workout }) => {
  return (
    <>
      <Typography>Load(Kg): {workout.load}</Typography>
      <Typography>reps: {workout.reps}</Typography>
      <Typography>
        Date:{' '}
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </Typography>
    </>
  );
};

export default Workoutdetails;
