import { Box } from "@mui/material";
import { FC } from "react";
import EditTaskForm from "../components/EditTaskForm";
import Header from "../components/Header";

const Edit: FC = () => {
  return (
    <Box>
      <Header title="Edit" />
      <EditTaskForm />
    </Box>
  );
};

export default Edit;
