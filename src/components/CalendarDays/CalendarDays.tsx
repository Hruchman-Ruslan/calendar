import React from "react";
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
  const [selectedDate, setSelectedDate] = React.useState<string>("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
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

      const remainingTasks = updatedTasks[draggedDay].filter(
        (task) => task.idTask !== draggedTask[0].idTask
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
            onDrop={handleDrop(day.toString())}
            onDragOver={handleDragOver}
          >
            <Text>{day}</Text>
            {tasks[day]?.map((task) => (
              <Card
                key={task.idTask}
                task={task}
                onDragStart={handleDragStart(day.toString())}
              />
            ))}
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
