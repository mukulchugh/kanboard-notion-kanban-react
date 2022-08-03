import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div style={{ padding: 50 }}>{children}</div>
    </div>
  );
}

export default Layout;
