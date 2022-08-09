import React from "react";
import useInputState from "./useInputState";
import { Button, TextField, Box } from "@mui/material";

const EditForm = (props) => {
  const [text, handleChangeText] = useInputState(props.startText);
  const [title, handleChangeTitle] = useInputState(props.startTitle);
  return (
    <Box
      sx={{
        p: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.editTask(props.taskId, title, text);
          props.toggle();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          m: 0,
          p: 0,
          ":hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <TextField
          label="Title"
          required
          id="title"
          value={title}
          onChange={handleChangeTitle}
          sx={{ m: 1 }}
        />
        <TextField
          sx={{ m: 1 }}
          type="text"
          value={text}
          label="Description"
          multiline
          rows={4}
          onChange={handleChangeText}
          name="task"
          id="task"
          variant="outlined"
        />
        <Button
          sx={{
            backgroundColor: "transparent",
            color: "#aaa",
            ":hover": { bgcolor: "transparent" },
          }}
          type="submit"
        >
          Save
        </Button>
      </form>
    </Box>
  );
};

export default EditForm;
