import React, { useState } from "react";
import { Modal, Box, Button, TextField } from "@mui/material";
import randomColor from "randomcolor";

const AddColumn = (props) => {
  const [title, setTitle] = useState("");
  const idColumn = props.columnData;

  const newColumn = {
    id: props.columnId,
    name: title,
    limit: 10,
    color: randomColor({ luminosity: "light" }),
    taskIds: [],
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: "white",
    boxShadow: 24,
    p: 2,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
  };
  return (
    <Modal open={props.openModal} onClose={props.closeModal}>
      <Box sx={style}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.addColumn(newColumn);
            props.closeModal();
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <TextField
            label="Title"
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            sx={{ m: 1, width: 400 }}
          ></TextField>
          <Button
            sx={{
              m: 1,
              color: "#aaa",
              bgcolor: "transparent",
              width: 400,
              ":hover": { bgcolor: "#aaa", color: "white" },
            }}
            type="submit"
          >
            Add New Column
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddColumn;
