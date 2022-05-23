import { createContext, FC, useCallback, useContext, useState } from "react";
import { Status, Task } from "../model";

interface TaskContextProps {
  tasks: Array<Task>;
  addTask: (task: Task) => void;
  changeTaskStatus: (id: string, status: Status) => void;
  children?: React.ReactNode;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTaskOption = () => {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const addTask = useCallback((task: Task) => {
    setTasks((tasks) => [...tasks, task]);
  }, []);

  const changeTaskStatus = useCallback((id: string, status: Status) => {
    setTasks((tasks) => {
      const item = tasks.find((t) => t.id === id);
      item!.status = status;

      return [...tasks];
    });
  }, []);

  return {
    tasks,
    addTask,
    changeTaskStatus,
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
