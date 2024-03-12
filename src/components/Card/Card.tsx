import React from "react";
import { getColor } from "../../utils/getColor";
import { Decor, Content, Wrapper } from "./Card.styled";
import { Task } from "../shared/TaskContext";

interface CardContentProps {
  task: Task;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
}

export const Card: React.FC<CardContentProps> = ({
  task,
  onDragStart,
  onMoveUp,
  onMoveDown,
}) => {
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Wrapper
      draggable
      onDragStart={onDragStart}
      onDragOver={handleDragOver}
      onDrop={onMoveUp}
      onDoubleClick={onMoveDown}
      style={{ cursor: "move", userSelect: "none" }}
    >
      <Decor style={{ color: getColor(task.difficulty) }}>
        {task.difficulty}
      </Decor>
      <Content>{task.task}</Content>
    </Wrapper>
  );
};
