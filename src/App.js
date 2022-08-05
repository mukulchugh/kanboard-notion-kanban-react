import React from "react";
import { CssBaseline } from "@mui/material";
import Layout from "./layout/Layout";
import Kanban from "./components/Kanban";

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Kanban />
      </Layout>
    </>
  );
}

export default App;
