import React, { createContext, useState, ReactNode } from "react";
import { Value } from "../..";

interface Task {
  idTask: string;
  task: string;
  difficulty: Value;
}

interface TaskContextType {
  tasks: {
    [date: string]: Task[];
  };
  updateTask: (date: string, task: string, difficulty: Value) => void;
  setTasks: React.Dispatch<
    React.SetStateAction<{
      [date: string]: Task[];
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
    [date: string]: Task[];
  }>({});

  const updateTask = (date: string, task: string, difficulty: Value) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      const idTask = generateId();
      if (updatedTasks[date]) {
        updatedTasks[date].push({ idTask, task, difficulty });
      } else {
        updatedTasks[date] = [{ idTask, task, difficulty }];
      }
      return updatedTasks;
    });
  };

  const generateId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  return (
    <TaskContext.Provider value={{ tasks, updateTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
