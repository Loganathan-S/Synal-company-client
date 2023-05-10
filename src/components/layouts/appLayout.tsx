import { Box } from "@mui/material";
import React from 'react'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
      <Outlet />
    </Box>
  )
}

export default AppLayout