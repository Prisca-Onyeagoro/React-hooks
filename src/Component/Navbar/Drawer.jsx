import {
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import MenuOpen from '@mui/icons-material/MenuOpen';
import React from 'react';
import { useState } from 'react';

const Drawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuOpen
          sx={{
            color: 'red ',
            display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' },
          }}
        />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <Box sx={{ width: 250 }}>
          <Box textAlign={'center'} p={2}>
            Components
          </Box>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary={'container'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'container'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'container'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'container'} />
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default Drawer;
