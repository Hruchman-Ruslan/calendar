import React from "react";
import { getColor } from "../../utils/getColor";
import { Value } from "..";
import { Decor, Content, Wrapper } from "./Card.styled";

interface CardContentProps {
  task: { idTask: string; task: string; difficulty: Value };
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const Card: React.FC<CardContentProps> = ({ task, onDragStart }) => {
  return (
    <Wrapper
      draggable
      onDragStart={onDragStart}
      style={{ cursor: "move", userSelect: "none" }}
    >
      <Decor style={{ color: getColor(task.difficulty) }}>
        {task.difficulty}
      </Decor>
      <Content>{task.task}</Content>
    </Wrapper>
  );
};
