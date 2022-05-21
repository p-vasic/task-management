import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import TaskItem from "./TaskItem";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: string;
};

interface ITasks {
  tasks: Array<Task>;
}

const Tasks: FC<ITasks> = ({ tasks }) => {
  return (
    <Box pt={3} bgcolor="#1976d2" borderRadius={5}>
      <Typography variant="h6" color="white" textAlign="left" marginLeft={3}>
        Tasks
      </Typography>

      <Box mt={3} bgcolor="#75a7d9" height="100vh" borderRadius={5} p={3}>
        {tasks.length === 0 ? (
          <Typography variant="subtitle1">
            You have nothing to do. Go get some sleep.
          </Typography>
        ) : (
          tasks.map((task, index) => <TaskItem key={index} task={task} />)
        )}
      </Box>
    </Box>
  );
};

export default Tasks;
