import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Task } from "./Tasks";

interface ITaskItem {
  task: Task;
}

const TaskItem: FC<ITaskItem> = ({ task }) => {
  return (
    <Box maxWidth={300}>
      <Card>
        <CardHeader title="Task title goes here" />
        <CardContent>
          Task description goes here. If thext size is more than 3 paragraphs it
          is trimmed.
        </CardContent>
        <CardActions>
          <Typography>Todo</Typography>
          <Button>Edit icon</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default TaskItem;
