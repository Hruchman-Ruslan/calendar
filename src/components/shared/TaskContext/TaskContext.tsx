import React, { createContext, useState, ReactNode } from "react";
import { Value } from "../..";

interface TaskContextType {
  tasks: { [date: string]: { task: string; difficulty: Value } };
  updateTask: (date: string, task: string, difficulty: Value) => void;
  setTasks: React.Dispatch<
    React.SetStateAction<{
      [date: string]: { task: string; difficulty: Value };
    }>
  >;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: {},
  updateTask: () => {},
  setTasks: () => {},
});

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<{
    [date: string]: { task: string; difficulty: Value };
  }>({});

  const updateTask = (date: string, task: string, difficulty: Value) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [date]: { task, difficulty },
    }));
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
