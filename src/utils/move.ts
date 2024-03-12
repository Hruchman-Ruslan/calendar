import React from "react";
import { Task } from "../components/shared/TaskContext";

export const handleDragStart =
  (day: string) => (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", day);
  };

export const handleDrop =
  (
    day: string,
    tasks: Record<string, Task[]>,
    setTasks: React.Dispatch<React.SetStateAction<Record<string, Task[]>>>
  ) =>
  (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    const draggedDay = e.dataTransfer.getData("text/plain");

    if (draggedDay !== day) {
      const updatedTasks = { ...tasks };
      const draggedTask = updatedTasks[draggedDay];

      const remainingTasks = updatedTasks[draggedDay].filter(
        (task: Task) => task.idTask !== draggedTask[0].idTask
      );
      if (!remainingTasks.length) {
        delete updatedTasks[draggedDay];
      } else {
        updatedTasks[draggedDay] = remainingTasks;
      }

      updatedTasks[day] = [...(updatedTasks[day] || []), draggedTask[0]];
      setTasks(updatedTasks);
    }
  };

export const handleDragOver = (
  e: React.DragEvent<HTMLUListElement> | React.DragEvent<HTMLLIElement>
) => {
  e.preventDefault();
};

export const handleMoveUp = (
  day: string,
  taskId: string,
  tasks: Record<string, Task[]>,
  setTasks: React.Dispatch<React.SetStateAction<Record<string, Task[]>>>
) => {
  const updatedTasks = { ...tasks };
  const taskIndex = updatedTasks[day].findIndex(
    (task: Task) => task.idTask === taskId
  );
  if (taskIndex > 0) {
    const temp = updatedTasks[day][taskIndex];
    updatedTasks[day][taskIndex] = updatedTasks[day][taskIndex - 1];
    updatedTasks[day][taskIndex - 1] = temp;
    setTasks(updatedTasks);
  }
};

export const handleMoveDown = (
  day: string,
  taskId: string,
  tasks: Record<string, Task[]>,
  setTasks: React.Dispatch<React.SetStateAction<Record<string, Task[]>>>
) => {
  const updatedTasks = { ...tasks };
  const taskIndex = updatedTasks[day].findIndex(
    (task: Task) => task.idTask === taskId
  );
  if (taskIndex < updatedTasks[day].length - 1) {
    const temp = updatedTasks[day][taskIndex];
    updatedTasks[day][taskIndex] = updatedTasks[day][taskIndex + 1];
    updatedTasks[day][taskIndex + 1] = temp;
    setTasks(updatedTasks);
  }
};
