import Box from "@mui/material/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./Navbar";
import {
  Avatar,
  Icon,
  IconButton,
  Typography,
  Stack,
  Button,
  Item,
  Container,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsIcon from "@mui/icons-material/Settings";

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
        width: "215px",
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
            maxWidth: "100%",
          }}
        >
          <Avatar
            alt="Mukul Chugh"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHPKtdJU3071Q/profile-displayphoto-shrink_400_400/0/1649350363634?e=1665014400&v=beta&t=WLfdW1Epc_TF9OUwxcQ5Yv7rpD5VnDj3z9NpJOM8fog"
          />

          <Box
            sx={{
              m: 1,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography>Mukul Chugh</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                mt: "-5px",
                ml: "5px",
              }}
            >
              <KeyboardArrowUpIcon sx={{ mb: "-12px" }} />
              <KeyboardArrowDownIcon />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            color: "#757370",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            variant="text"
            startIcon={<SearchIcon />}
            sx={{
              color: "#757370",
              textTransform: "capitalize",
              fontSize: "12px",
              ":hover": {
                backgroundColor: "transparent",
                color: "#000",
              },
            }}
          >
            Quick Find
          </Button>
          <Button
            variant="text"
            startIcon={<AccessTimeIcon />}
            sx={{
              color: "#757370",
              textTransform: "capitalize",
              fontSize: "12px",
              ":hover": {
                backgroundColor: "transparent",
                color: "#000",
              },
            }}
          >
            All Updates
          </Button>
          <Button
            variant="text"
            startIcon={<SettingsIcon />}
            sx={{
              color: "#757370",
              textTransform: "capitalize",
              fontSize: "12px",
              ":hover": {
                backgroundColor: "transparent",
                color: "#000",
              },
            }}
          >
            Settings
          </Button>
        </Box>
        <List dense={dense}>{generate(<ListItem></ListItem>)}</List>
      </Box>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "100%" }}>
        {children}
      </Box>
    </Box>
  );
}
export default Sidebar;
