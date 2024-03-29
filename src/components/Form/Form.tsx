import React from "react";
import { SaveButton, TaskInput, Wrapper } from "./Form.styled";
import { Select, Value } from "..";
import { useTask } from "../../context";

interface FormProps {
  date: string;
  toggle: () => void;
}

export const Form: React.FC<FormProps> = ({ date, toggle }) => {
  const { addTask } = useTask();
  const [taskValue, setTaskValue] = React.useState("");
  const [difficulty, setDifficulty] = React.useState<Value>("Meeting");

  const handleTaskChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTaskValue(event.target.value);
  };

  const handleSaveTask = (): void => {
    addTask(date, taskValue, difficulty);
    setTaskValue("");
    toggle();
  };

  const handleSelectChange = (value: Value | null) => {
    setDifficulty(value || "Meeting");
  };

  return (
    <>
      <Select setSelected={handleSelectChange} selected={difficulty} />
      <Wrapper>
        <TaskInput value={taskValue} onChange={handleTaskChange} />
        <SaveButton onClick={handleSaveTask}>Save task</SaveButton>
      </Wrapper>
    </>
  );
};
