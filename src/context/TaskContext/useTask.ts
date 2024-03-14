import { useContext } from "react";
import { TaskContext } from "..";

export const useTask = () => useContext(TaskContext);
