import React, { createContext, useState, ReactNode, FC } from "react";
import { Value } from "../..";

export interface Task {
  idTask: string;
  task: string;
  difficulty: Value;
}

interface TaskContextType {
  tasks: {
    [date: string]: Task[];
  };
  addTask: (date: string, task: string, difficulty: Value) => void;
  setTasks: React.Dispatch<
    React.SetStateAction<{
      [date: string]: Task[];
    }>
  >;
}

export const TaskContext = createContext<TaskContextType>({
  tasks: {},
  addTask: () => {},
  setTasks: () => {},
});

export const TaskProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<{
    [date: string]: Task[];
  }>({});

  const addTask = (date: string, task: string, difficulty: Value) => {
    setTasks((prevTasks) => {
      const newTask = {
        idTask: Date.now().toString(),
        task,
        difficulty,
      };
      return {
        ...prevTasks,
        [date]: [...(prevTasks[date] || []), newTask],
      };
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
