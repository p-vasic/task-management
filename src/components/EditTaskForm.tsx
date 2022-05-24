import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useTask } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { Status, STATUS, Task } from "../model";

const possibleStatus = {
  todo: ["todo", "progress"],
  progress: ["progress", "block", "qa"],
  block: ["todo", "block"],
  qa: ["todo", "done", "qa"],
  done: ["deployed", "done"],
  deployed: ["deployed"],
};

const EditTaskForm: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const { getTask, updateTask } = useTask();
  const [task, setTask] = useState<Task>({
    id: "",
    title: "",
    description: "",
    status: "todo",
  });

  useEffect(() => {
    if (id) {
      setTask(getTask(id)!);
    }
  }, [id, getTask]);

  const handleChange =
    (field: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setTask((task) => ({ ...task, [field]: e.target.value }));
    };

  const handleEdit = () => {
    updateTask(id!, task!);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Box
      p={5}
      margin="0 auto"
      display="Flex"
      justifyContent="center"
      flexDirection="column"
      maxWidth={500}
      data-testid="edit-task-form"
    >
      <Typography variant="h6" textAlign="left">
        Edit Task
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
          rows={10}
          value={task.description}
          onChange={handleChange("description")}
        />
      </FormControl>
      <FormControl margin="normal">
        <TextField
          select
          fullWidth
          value={task.status}
          onChange={handleChange("status")}
        >
          {possibleStatus[task.status].map((status, index) => (
            <MenuItem key={index} value={status}>
              {STATUS[status as Status]}
            </MenuItem>
          ))}
        </TextField>
      </FormControl>
      <FormControl margin="normal">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleEdit}
              fullWidth
              data-testid="edit-button"
            >
              Edit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleCancel}
              fullWidth
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default EditTaskForm;
