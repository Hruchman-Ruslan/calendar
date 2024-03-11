import React, { ChangeEvent, useState } from "react";
import { SaveButton, TaskInput, Wrapper } from "./Form.styled";
import { Select, Value } from "..";
import { useTask } from "../shared/TaskContext";

interface FormProps {
  date: string;
  toggle: () => void;
}

export const Form: React.FC<FormProps> = ({ date, toggle }) => {
  const { updateTask } = useTask();
  const [task, setTaskValue] = useState("");
  const [difficulty, setDifficulty] = useState<Value>("Normal");

  const handleTaskChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setTaskValue(event.target.value);
  };

  const handleSaveTask = (): void => {
    updateTask(date, task, difficulty);
    toggle();
  };

  return (
    <>
      <Select setSelected={setDifficulty} selected={difficulty} />
      <Wrapper>
        <TaskInput value={task} onChange={handleTaskChange} />
        <SaveButton onClick={handleSaveTask}>Save task</SaveButton>
      </Wrapper>
    </>
  );
};
