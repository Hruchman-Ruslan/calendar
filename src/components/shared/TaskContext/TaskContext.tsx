import React, { createContext, useState } from "react";

interface TaskContextType {
  task: string;
  setTask: (task: string) => void;
}

export const TaskContext = createContext<TaskContextType>({
  task: "",
  setTask: () => {},
});

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [task, setTask] = useState<string>("");

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};
