import { render, renderHook, screen } from "@testing-library/react";
import TaskProvider, { useTaskOption } from "../context/TaskContext";
import AddTaskForm from "./AddTaskForm";

describe("AddTaskForm test", () => {
  it("should be rendered correctly", () => {
    const { result } = renderHook(useTaskOption);

    render(
      <TaskProvider {...result.current}>
        <AddTaskForm />
      </TaskProvider>
    );

    expect(
      screen.getByTestId("add-task-form").getElementsByTagName("input").length
    ).toBeCloseTo(1);
    expect(
      screen.getByTestId("add-task-form").getElementsByTagName("textarea")
        .length
    ).toBeCloseTo(2);
  });
});
