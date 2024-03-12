import React, { createContext, useState, ReactNode } from "react";
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

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<{
    [date: string]: Task[];
  }>({});

  const addTask = (date: string, task: string, difficulty: Value) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [date]: [
        ...(prevTasks[date] || []),
        { idTask: generateId(), task, difficulty },
      ],
    }));
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
