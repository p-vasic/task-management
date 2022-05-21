import { AppBar, Box, Typography } from '@mui/material';
import React, { FC } from 'react';

const Header: FC = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ padding: '16px 20px' }}>
        <Typography variant="h5" textAlign="left">Task Management</Typography>
      </AppBar>
    </Box>
  )
}

export default Header;