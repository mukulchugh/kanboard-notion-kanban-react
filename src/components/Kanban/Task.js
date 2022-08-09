import React from "react";
import { Draggable } from "react-beautiful-dnd";
import useToggle from "./useToggleState";
import EditForm from "./EditForm";
import { Box, Button, IconButton, Card, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = (props) => {
  const [isEditing, toggle] = useToggle(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Draggable draggableId={`${props.task.id}`} index={props.index}>
      {(provided, snapshot) => (
        <Card
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          sx={{
            ":hover": {
              backgroundColor: "#eee",
            },

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "6px",
            border: "1px solid #ddd",
            userSelect: "none",
            px: 2,
            py: 0.8,
            margin: "0 0 4px 0",
            minHeight: "20px",
            backgroundColor: "#fff",
            opacity: snapshot.isDragging ? 0.3 : 1,
            transition: "opacity 7s linear",
            boxShadow: "0px 9px 22px -8px rgba(0,0,0,0.1)",
            color: "black",
          }}
        >
          {isEditing ? (
            <EditForm
              color={props.color}
              editTask={props.editTask}
              taskId={props.task.id}
              toggle={toggle}
              startTitle={props.task.title}
              startText={props.task.text}
            />
          ) : (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div>
                  <span>{props.task.title}</span>
                </div>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <IconButton id="basic-button" onClick={handleClick}>
                  <MoreHorizIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Button
                      startIcon={<EditIcon fontSize="small" />}
                      onClick={toggle}
                      sx={{
                        bgcolor: "transparent",
                        color: "#aaa",
                        ":hover": { bgcolor: "transparent" },
                      }}
                    >
                      Edit
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button
                      sx={{
                        bgcolor: "transparent",
                        color: "#aaa",
                        ":hover": { bgcolor: "transparent" },
                      }}
                      startIcon={<DeleteIcon fontSize="small" />}
                      onClick={() => props.removeTask(props.task.id)}
                    >
                      Delete
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          )}
        </Card>
      )}
    </Draggable>
  );
};

export default Task;
