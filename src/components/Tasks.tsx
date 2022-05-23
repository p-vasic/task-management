import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTask } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const Tasks: FC = () => {
  const { tasks } = useTask();

  return (
    <Box pt={3} bgcolor="#1976d2" borderRadius={5}>
      <Typography variant="h6" color="white" textAlign="left" marginLeft={3}>
        Tasks
      </Typography>

      <Box mt={3} bgcolor="#75a7d9" height="90vh" borderRadius={5} p={3}>
        <Grid container>
          {tasks.length === 0 ? (
            <Typography variant="subtitle1">
              You have nothing to do. Go get some sleep.
            </Typography>
          ) : (
            tasks.map((task, index) => (
              <Grid item key={task.id} xs={12} sm={6} md={4}>
                <TaskItem task={task} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Tasks;
