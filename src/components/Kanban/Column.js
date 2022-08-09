import React from "react";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Column = (props) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            backgroundColor: `${props.columnData.color}`,
            fontWeight: "bold",
            color: LightenDarkenColor(props.columnData.color, -100),
            p: 1,
            borderRadius: "5px",
            zIndex: 1,
            ml: 1,
          }}
        >
          {props.columnData.name} ({props.columnData.taskIds.length})
        </Typography>
        <IconButton
          sx={{ right: 20 }}
          onClick={(e) => {
            e.preventDefault();
            props.removeColumn(props.columnData.id);
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
      <Droppable droppableId={`${props.columnData.id - 1}`}>
        {(provided, snapshot) => (
          <Box
            sx={{
              background: "white",
              pt: 2,
              width: 340,
              px: 1,
            }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.columnData.taskIds.map((task, index) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  task={task}
                  color={props.columnData.color}
                  index={index}
                  removeTask={props.removeTask}
                  editTask={props.editTask}
                />
              );
            })}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>

      <Box sx={{ pt: 2 }}>
        <Button
          sx={{
            color: "#aaa",
            textTransform: "none",
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
          onClick={() => props.openModal(props.columnData)}
          disabled={props.columnData.taskIds.length >= 5 ? true : false}
          startIcon={<AddIcon />}
        >
          New
        </Button>
      </Box>
    </Box>
  );
};

export default Column;

function LightenDarkenColor(colorCode, amount) {
  let usePound = false;

  if (colorCode[0] === "#") {
    colorCode = colorCode.slice(1);
    usePound = true;
  }
  const num = parseInt(colorCode, 16);
  let r = (num >> 16) + amount;

  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }

  let b = ((num >> 8) & 0x00ff) + amount;

  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }

  let g = (num & 0x0000ff) + amount;

  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }
  let color = (g | (b << 8) | (r << 16)).toString(16);
  while (color.length < 6) {
    color = 0 + color;
  }
  return (usePound ? "#" : "") + color;
}
