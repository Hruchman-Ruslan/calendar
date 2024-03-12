import React from "react";
import { SaveButton, TaskInput, Wrapper } from "./Form.styled";
import { Select, Value } from "..";
import { useTask } from "../shared/TaskContext";

interface FormProps {
  date: string;
  toggle: () => void;
}

export const Form: React.FC<FormProps> = ({ date, toggle }) => {
  const { addTask } = useTask();
  const [task, setTaskValue] = React.useState("");
  const [difficulty, setDifficulty] = React.useState<Value>("Normal");

  const handleTaskChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setTaskValue(event.target.value);
  };

  const handleSaveTask = (): void => {
    addTask(date, task, difficulty);
    setTaskValue("");
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
