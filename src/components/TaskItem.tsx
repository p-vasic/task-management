import { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { STATUS, Task } from "../model";
import editButton from "../edit-button.svg";
import { useNavigate } from "react-router-dom";

interface ITaskItem {
  task: Task;
}

const TaskItem: FC<ITaskItem> = ({ task }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(task.id);
  };

  return (
    <Card sx={{ textAlign: "left" }}>
      <CardHeader title={task.title} />
      <CardContent sx={{ minHeight: 80 }}>
        <Typography
          component="span"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            display: "-webkit-box",
          }}
        >
          {task.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography
            sx={{
              background: "#1976d2",
              color: "white",
              padding: "6px 10px",
              borderRadius: "4px",
            }}
          >
            {STATUS[task.status]}
          </Typography>
          <Button onClick={handleEdit}>
            <img src={editButton} width="24" height="24" />
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
