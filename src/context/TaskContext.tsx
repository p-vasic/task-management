import { createContext, FC, useCallback, useContext, useState } from "react";
import { Status, Task } from "../model";

interface TaskContextProps {
  tasks: Array<Task>;
  addTask: (task: Task) => void;
  updateTask: (id: string, updated: Task) => void;
  getTask: (id: string) => Task | undefined;
  children?: React.ReactNode;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTaskOption = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const addTask = useCallback((task: Task) => {
    setTasks((tasks) => [...tasks, task]);
  }, []);

  const updateTask = useCallback((id: string, updated: Task) => {
    setTasks((tasks) => {
      let item = tasks.find((t) => t.id === id);

      return [...tasks.filter((t) => t.id !== id), { ...item, ...updated }];
    });
  }, []);

  const getTask = (id: string) => {
    return tasks.find((task) => task.id === id);
  };

  return {
    tasks,
    addTask,
    updateTask,
    getTask,
  };
};

export const useTask = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) {
    throw new Error("useTask must be used within TaskContext");
  }

  return taskContext;
};

const TaskProvider: FC<TaskContextProps> = ({ children, ...props }) => {
  return <TaskContext.Provider value={props}>{children}</TaskContext.Provider>;
};

export default TaskProvider;
