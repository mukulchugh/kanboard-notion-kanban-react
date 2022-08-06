import React from "react";
import useInputState from "./useInputState";
import { v4 as uuid } from "uuid";
import { Modal, Box, Button, TextField } from "@mui/material";

const KanModal = (props) => {
  const [text, handleChangeText] = useInputState("");
  const [title, handleChangeTitle] = useInputState("");

  const idColumn = props.columnData;

  const newTask = {
    id: uuid(),
    text: text,
    idColumn: idColumn,
    title: title,
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "white",
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
            props.addTask(newTask);
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
            onChange={handleChangeTitle}
            required
            sx={{ m: 1, width: 400 }}
          ></TextField>
          <TextField
            label="Description"
            multiline
            rows={4}
            value={text}
            onChange={handleChangeText}
            name="task"
            id="task"
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
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default KanModal;
