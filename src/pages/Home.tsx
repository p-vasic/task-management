import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { FC } from "react";
import Header from "../components/Header";

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
            rows={10}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" color="primary">
            + Add
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Home;
