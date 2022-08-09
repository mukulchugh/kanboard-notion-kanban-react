import React from "react";
import { Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Layout from "./layout/Layout";

import Kanban from "./components/Kanban/Kanban";
import DividerBar from "./components/DividerBar";

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Typography variant="h4" sx={{ fontWeight: "bold", my: 7 }}>
          <img
            src={require("./assets/calendarIcon.svg")}
            style={{
              width: "4rem",
              marginBottom: "-1.2rem",
            }}
            alt="mySvgImage"
          />
          Kanban Board
        </Typography>
        <DividerBar />
        <Kanban />
      </Layout>
    </>
  );
}

export default App;
