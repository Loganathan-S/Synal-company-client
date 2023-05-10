import React from "react";
import { Box, Paper, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";

const DeviceList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      {/* <Paper
        elevation={1}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Button
          variant='outlined'
          sx={{
            px: "5em",
            py: "10px",
            fontSize: "1.5rem",
            borderRadius: "15px",
          }}
        >
          <HubOutlinedIcon />
          Add Devices
        </Button>
      </Paper> */}
    </Box>
  );
};

export default DeviceList;
