import React, { useState } from "react";
import { getColor } from "../../utils/getColor";
import {
  Decor,
  Content,
  Wrapper,
  Box,
  Input,
  ShowWrapper,
  Button,
} from "./Card.styled";
import { Task, useTask } from "../shared/TaskContext";
import { Icon, Select, Value } from "..";

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
  const { editTask } = useTask();
  const [editing, setEditing] = useState(false);
  const [taskValue, setTaskValue] = useState("");
  const [difficulty, setDifficulty] = useState<Value>("Normal");

  const handleEditClick = () => setEditing(true);
  const handleSaveClick = () => {
    editTask(task.idTask, { task: taskValue, difficulty });
    setEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskValue(e.target.value);
  };

  const handleEditingContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Wrapper
      draggable
      onDragStart={onDragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onMoveUp}
      onDoubleClick={onMoveDown}
      style={{ cursor: "move", userSelect: "none" }}
      onClick={handleEditingContainerClick}
    >
      {editing ? (
        <ShowWrapper>
          <Select setSelected={setDifficulty} selected={difficulty} />
          <Input type="text" value={taskValue} onChange={handleInputChange} />
          <Button onClick={handleSaveClick}>Save</Button>
        </ShowWrapper>
      ) : (
        <>
          <Box>
            <Decor style={{ color: getColor(task.difficulty) }}>
              {task.difficulty}
            </Decor>
            <div onClick={handleEditClick}>
              <Icon idIcon="edit" width={15} height={15} />
            </div>
          </Box>
          <Content>{task.task}</Content>
        </>
      )}
    </Wrapper>
  );
};
