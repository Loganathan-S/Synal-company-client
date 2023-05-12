import React, { useEffect } from "react";
import { Box, Paper, Button, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../routerPath";


const DeviceList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const queryClient = useQueryClient()
  const navigate = useNavigate();

  const fetch = () => {
    return JSON.parse(decodeURIComponent(localStorage.getItem('userDetails') as string))
  }
  const getUserQuery = useQuery({
    queryKey: ['userDetails'],
    queryFn: () => fetch()
  })

  const logout = () => {

    queryClient.clear()
    localStorage.clear()
    navigate(routePath.auth.login)
  }

  return (
    <Box>
      <Paper
        elevation={1}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Button
          onClick={logout}
          sx={{
            px: "5em",
            py: "10px",
            fontSize: "1.5rem",
            borderRadius: "15px",
          }}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default DeviceList;
