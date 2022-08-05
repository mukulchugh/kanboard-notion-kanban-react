import React from "react";
import Sidebar from "../components/Sidebar";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div style={{ padding: 60 }}>{children}</div>
    </div>
  );
}

export default Layout;
