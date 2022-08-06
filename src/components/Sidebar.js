import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Navbar";
import { Avatar, Typography, List, Grid, ListItem } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsIcon from "@mui/icons-material/Settings";
import { PlayArrow } from "@mui/icons-material";
import { v4 as uuid } from "uuid";

const list = [
  {
    id: uuid(),
    title: "Content Writeups",
  },
  {
    id: uuid(),
    title: "Study Plan",
  },
  {
    id: uuid(),
    title: "Job Applications Tracker",
  },
  {
    id: uuid(),
    title: "Coursework",
  },
  {
    id: uuid(),
    title: "My Todo-List",
  },
  {
    id: uuid(),
    title: "College Notes",
  },
  {
    id: uuid(),
    title: "Random Stuff",
  },
];
const menu = [
  {
    id: 21,
    title: "Quick Find",
    icon: <SearchIcon fontSize="small" />,
  },
  {
    id: 32,
    title: "All Updates",
    icon: <AccessTimeIcon fontSize="small" />,
  },
  {
    id: 34,
    title: "Settings",
    icon: <SettingsIcon fontSize="small" />,
  },
];

function Sidebar({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#F7F6F3",
        pt: 2,
        pl: 2,
        color: "#000",
        width: "17%",
      }}
    >
      <CssBaseline />
      <Box sx={{}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            m: 0,
            width: "100%",
          }}
        >
          <Avatar
            alt="Mukul Chugh"
            sx={{ width: 30, height: 30 }}
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHPKtdJU3071Q/profile-displayphoto-shrink_400_400/0/1649350363634?e=1665014400&v=beta&t=WLfdW1Epc_TF9OUwxcQ5Yv7rpD5VnDj3z9NpJOM8fog"
          />

          <Box
            sx={{
              m: 1,
              display: "flex",
              flexDirection: "row",
              width: "130px",
            }}
          >
            <Typography sx={{ fontSize: "15px", fontWeight: "bold", mt: -0.4 }}>
              Mukul Chugh
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                mt: "-5px",
                ml: "5px",
              }}
            >
              <KeyboardArrowUpIcon fontSize="small" sx={{ mb: "-12px" }} />
              <KeyboardArrowDownIcon fontSize="small" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            color: "#757370",
            display: "flex",
            mt: 2,
            flexDirection: "column",
          }}
        >
          {menu.map((obj) => (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Grid
                item
                key={obj.id}
                variant="text"
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "row",
                  mb: 0.5,
                  color: "#757370",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  fontSize: "15px",
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "#000",
                  },
                }}
              >
                <div style={{ marginTop: -2, marginRight: 4 }}>{obj.icon}</div>
                {obj.title}
              </Grid>
            </div>
          ))}
        </Box>
        <List>
          {list.map((item) => (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <ListItem
                sx={{
                  color: "#757370",
                  borderRadius: "4px",
                  fontWeight: "bold",
                  width: "250px",
                  flexWrap: "space-between",
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "#ddd",
                    color: "#000",
                  },
                }}
                key={item.id}
              >
                <PlayArrow sx={{ mr: 1, ml: -2 }} fontSize="small" />
                {item.title}
              </ListItem>
            </div>
          ))}
        </List>
      </Box>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
}
export default Sidebar;
