import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { FC } from "react";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

const mockTask = [
  {
    id: "1",
    title: "AGN-1111",
    description: "Upgrade the free plan to premium model.",
    status: "todo",
  },
];

const Home: FC = () => {
  return (
    <Box>
      <Header />
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
          <TextField name="title" placeholder="Title" fullWidth />
        </FormControl>
        <FormControl margin="normal">
          <TextField
            name="description"
            placeholder="Description"
            fullWidth
            multiline
            rows={5}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" color="primary">
            + Add
          </Button>
        </FormControl>
      </Box>
      <Tasks tasks={mockTask} />
    </Box>
  );
};

export default Home;
