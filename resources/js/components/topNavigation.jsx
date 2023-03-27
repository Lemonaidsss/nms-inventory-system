import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function topNavigation() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          About
        </Typography>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default topNavigation;