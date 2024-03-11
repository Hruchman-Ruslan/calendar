import React, { useState } from "react";
import { getDays } from "../../utils";
import { Modal } from "..";
import { Form } from "..";
import { useTask } from "../shared/TaskContext";
import { Card } from "../Card/Card";
import { Item, List, Text } from "./CalendarDays.styled";

interface CalendarDaysProps {
  currentDate: Date;
}

export const CalendarDays: React.FC<CalendarDaysProps> = ({ currentDate }) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks, setTasks } = useTask();

  const toggleModal = (date: string) => {
    setSelectedDate(date);
    setIsModalOpen((prevState) => !prevState);
  };

  const handleDragStart =
    (day: string) => (e: React.DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData("text/plain", day);
    };

  const handleDrop = (day: string) => (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    const draggedDay = e.dataTransfer.getData("text/plain");

    if (draggedDay !== day) {
      const updatedTasks = { ...tasks };
      const draggedTask = updatedTasks[draggedDay];
      delete updatedTasks[draggedDay];

      updatedTasks[day] = draggedTask;
      setTasks(updatedTasks);
    }
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLUListElement> | React.DragEvent<HTMLLIElement>
  ) => {
    e.preventDefault();
  };

  return (
    <>
      <List onDragOver={handleDragOver}>
        {getDays(currentDate).map((day) => (
          <Item
            key={day}
            onClick={() => toggleModal(day.toString())}
            onDrop={(e) => handleDrop(day.toString())(e)}
            onDragOver={handleDragOver}
          >
            <Text>{day}</Text>
            {tasks[day] && (
              <Card
                task={tasks[day]}
                onDragStart={handleDragStart(day.toString())}
              />
            )}
          </Item>
        ))}
      </List>
      {isModalOpen && (
        <Modal toggle={() => toggleModal(selectedDate)}>
          <Form date={selectedDate} toggle={() => toggleModal(selectedDate)} />
        </Modal>
      )}
    </>
  );
};
