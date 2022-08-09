import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        flexGrow: 1,
        position: "absolute",
        top: 0,
        width: "80vw",
        right: 50,
        color: "#000",
        backgroundColor: "#fff",
        boxShadow: "none",
      }}
    >
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <ArrowForwardIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          fontSize="1rem"
          sx={{ flexGrow: 1 }}
        >
          My Todo-List
        </Typography>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button sx={{ color: "#000", textTransform: "capitalize" }}>
            <Typography>Share</Typography>
          </Button>
          <IconButton>
            <AccessTimeIcon />
          </IconButton>
          <IconButton>
            <StarBorderIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
