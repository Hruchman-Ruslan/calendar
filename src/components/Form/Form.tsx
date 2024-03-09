import React, { ChangeEvent } from "react";
import { SaveButton, TaskInput, Wrapper } from "./Form.styled";
import { Select } from "..";
import { useTask } from "../shared/TaskContext";

interface FormProps {
  toggle: () => void;
}

export const Form: React.FC<FormProps> = ({ toggle }) => {
  const { task, setTask } = useTask();

  const handleTaskChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setTask(event.target.value);
  };

  const handleSaveTask = (): void => {
    toggle();
  };

  return (
    <>
      <Select />
      <Wrapper>
        <TaskInput value={task} onChange={handleTaskChange} />
        <SaveButton onClick={handleSaveTask}>Save task</SaveButton>
      </Wrapper>
    </>
  );
};
