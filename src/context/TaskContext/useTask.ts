import { useContext } from "react";
import { TaskContext } from "./TaskContext.tsx";

export const useTask = () => useContext(TaskContext);
