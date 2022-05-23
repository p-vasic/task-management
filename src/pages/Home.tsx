import { FC } from "react";
import { Box } from "@mui/material";
import AddTaskForm from "../components/AddTaskForm";
import Header from "../components/Header";
import Tasks from "../components/Tasks";

const Home: FC = () => {
  return (
    <Box>
      <Header title="Home" />
      <AddTaskForm />
      <Tasks />
    </Box>
  );
};

export default Home;
