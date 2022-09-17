import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import Person from '@mui/icons-material/Person';
import Login from '@mui/icons-material/Login';

import React from 'react';

// Register form
export const FormDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <Typography variant="outlined" onClick={handleClickOpen}>
        <Person />
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          textAlign="center"
          alignSelf="center"
          sx={{ alignSelf: 'center' }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: '600', fontFamily: 'Arial Black' }}
          >
            Register <Person />
          </Typography>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            
          </DialogContentText> */}
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <DialogActions
              textAlign="center"
              alignSelf="center"
              sx={{ alignSelf: 'center' }}
            >
              <Button
                variant="h4"
                fontWeight="500"
                type="submit"
                onClick={handleSubmit}
              >
                Register
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

// Login

export const LoginDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Typography variant="outlined" onClick={handleClickOpen}>
        <Login />
      </Typography>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          textAlign="center"
          alignSelf="center"
          sx={{ alignSelf: 'center' }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: '600', fontFamily: 'Arial Black' }}
          >
            Login <Login />
          </Typography>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            
          </DialogContentText> */}
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="password"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </form>
        </DialogContent>
        <DialogActions
          textAlign="center"
          alignSelf="center"
          sx={{ alignSelf: 'center' }}
        >
          <Button variant="h4" fontWeight="500">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
