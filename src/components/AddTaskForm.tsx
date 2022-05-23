import React, { ChangeEvent, FC, useState } from "react";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useTask } from "../context/TaskContext";
import { v4 as uuid } from "uuid";

const AddTaskForm: FC = () => {
  const { addTask } = useTask();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setTask((task) => ({ ...task, [field]: e.target.value }));
    };

  const handleAdd = () => {
    if (!task.title) {
      alert("Please enter the title.");
    } else {
      addTask({
        id: uuid(),
        ...task,
        status: "todo",
      });
      setTask({
        title: "",
        description: "",
      });
    }
  };

  return (
    <Box
      p={5}
      margin="0 auto"
      display="Flex"
      justifyContent="center"
      flexDirection="column"
      maxWidth={500}
    >
      <Typography variant="h6" textAlign="left">
        Add a new Task
      </Typography>
      <FormControl margin="normal">
        <TextField
          name="title"
          placeholder="Title"
          fullWidth
          value={task.title}
          onChange={handleChange("title")}
        />
      </FormControl>
      <FormControl margin="normal">
        <TextField
          name="description"
          placeholder="Description"
          fullWidth
          multiline
          rows={5}
          value={task.description}
          onChange={handleChange("description")}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" color="primary" onClick={handleAdd}>
          + Add
        </Button>
      </FormControl>
    </Box>
  );
};

export default AddTaskForm;
