import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TaskProvider, { useTask, useTaskOption } from "../context/TaskContext";
import EditTaskForm from "./EditTaskForm";

describe("EditTaskForm test", () => {
  it("should be rendered correctly", () => {
    const { result } = renderHook(useTaskOption);

    render(
      <BrowserRouter>
        <TaskProvider {...result.current}>
          <EditTaskForm />
        </TaskProvider>
      </BrowserRouter>
    );

    expect(
      screen.getByTestId("edit-task-form").getElementsByTagName("input").length
    ).toBeCloseTo(2);
    expect(
      screen.getByTestId("edit-task-form").getElementsByTagName("textarea")
        .length
    ).toBeCloseTo(2);
    expect(
      screen.getByTestId("edit-task-form").getElementsByTagName("button").length
    ).toBeCloseTo(2);
  });
});
