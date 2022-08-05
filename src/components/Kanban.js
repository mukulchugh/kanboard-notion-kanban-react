import { Box, Card, Container, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from "uuid";
import DividerBar from "../components/DividerBar";
import randomColor from "randomcolor";
import AddIcon from "@mui/icons-material/Add";

const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "Fifth task" },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "No Status",
    count: "2",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "ToDo",
    count: "2",
    items: [],
  },
  [uuid()]: {
    name: "In Progress",
    count: "2",
    items: [],
  },
};

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

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};
const Kanban = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold", my: 5 }}>
        Kanban Board
      </Typography>
      <DividerBar />
      <Container sx={{ ml: -8, display: "flex", height: "100%" }}>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            const color = randomColor();

            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
                key={columnId}
              >
                <p
                  style={{
                    fontSize: "13px",
                    backgroundColor: LightenDarkenColor(color, 20),
                    fontWeight: "bold",
                    color: LightenDarkenColor(color, -100),
                    padding: 6,
                    borderRadius: "5px",
                    marginBottom: -15,
                    zIndex: 1,
                    marginLeft: -160,
                  }}
                >
                  {column.name}
                </p>

                <Box style={{ margin: 8 }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <Box
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          sx={{
                            background: "white",
                            padding: 4,
                            width: 300,
                            minHeight: 500,
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <Card
                                      variant="outlined"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        padding: 8,
                                        margin: "0 0 8px 0",
                                        minHeight: "20px",
                                        backgroundColor: snapshot.isDragging
                                          ? "transparent"
                                          : "#fff",
                                        "-webkit-box-shadow":
                                          " 0px 0px 22px -10px rgba(66,66,66,0.24)",
                                        "-moz-box-shadow":
                                          "0px 0px 22px -10px rgba(66,66,66,0.24)",
                                        boxShadow:
                                          "0px 0px 22px -10px rgba(66,66,66,0.24)",
                                        color: "black",

                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      {item.content}
                                    </Card>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                          <Button
                            sx={{
                              color: "#aaa",
                              textTransform: "none",
                              ":hover": {
                                backgroundColor: "transparent",
                              },
                            }}
                            startIcon={<AddIcon />}
                          >
                            New
                          </Button>
                        </Box>
                      );
                    }}
                  </Droppable>
                </Box>
              </Box>
            );
          })}
        </DragDropContext>
      </Container>
    </>
  );
};

export default Kanban;
