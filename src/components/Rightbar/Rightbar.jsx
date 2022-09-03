import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import Bal from '../../assets/Bal.jpg';
import Card from '../Card/Card';
const Rightbar = () => {
  return (
    <Box>
      <Typography align="center" backgroundColor="black" color="whitesmoke">
        Most Popular Posts and Reviews
      </Typography>
      <List
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              variant="square"
              sx={{ height: 80, width: 80 }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1579610520129-963c74781ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={" — I'll be in your neighborhood doing errands this"}
          />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              variant="square"
              sx={{ height: 80, width: 80 }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={" — I'll be in your neighborhood doing errands this"}
          />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              variant="square"
              sx={{ height: 80, width: 80 }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1544717304-a2db4a7b16ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={" — I'll be in your neighborhood doing errands this"}
          />
        </ListItem>
      </List>
      <List
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
        }}
      >
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar
              variant="square"
              sx={{ height: 80, width: 80 }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1616002411355-49593fd89721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={" — I'll be in your neighborhood doing errands this"}
          />
        </ListItem>
        <Divider variant="inset" component={'li'} />
        <Typography align="center" backgroundColor="black" color="whitesmoke">
          About us
        </Typography>
        <Card cardImage="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJyYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      </List>
    </Box>
  );
};

export default Rightbar;
