import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { STATUS, Task } from "../model";
import TaskItem from "./TaskItem";

describe("TaskItem test", () => {
  it("should be rendered with certain task item", () => {
    const task: Task = {
      id: "abc-def-ghi-jkl",
      title: "Home assignment",
      description: "Deadline is after 5 days.",
      status: "todo",
    };

    render(
      <BrowserRouter>
        <TaskItem task={task} />
      </BrowserRouter>
    );

    expect(screen.getByTestId("task-item")).toHaveTextContent(
      `${task.title}${task.description}${STATUS[task.status]}`
    );
  });
});
