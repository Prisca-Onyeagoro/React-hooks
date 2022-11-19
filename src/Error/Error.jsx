import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box>
      <Typography variant="h1">OOPS!</Typography>
      <Typography variant="body1">Something went wrong </Typography>
      <Typography variant="body1">
        {error.statusText || error.message}{' '}
      </Typography>
    </Box>
  );
}
