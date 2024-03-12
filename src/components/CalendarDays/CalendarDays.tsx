import React, { useState, useEffect } from "react";
import {
  getDays,
  handleDragOver,
  handleDragStart,
  handleDrop,
  handleMoveDown,
  handleMoveUp,
} from "../../utils";
import { Modal } from "..";
import { Form } from "..";
import { Task, useTask } from "../shared/TaskContext";
import { Card } from "../Card/Card";
import { Item, List, Text, Wrapper } from "./CalendarDays.styled";
import { fetchHolidays } from "../../api";
import { HolidayList } from "../HolidayList/HolidayList";

interface Holiday {
  date: string;
  name: string;
}

interface CalendarDaysProps {
  currentDate: Date;
  countryCode: string;
}

export const CalendarDays: React.FC<CalendarDaysProps> = ({
  currentDate,
  countryCode,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks, setTasks } = useTask();
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  useEffect(() => {
    const fetchHolidaysData = async () => {
      const year = currentDate.getFullYear();
      const data = await fetchHolidays(year, countryCode);
      setHolidays(data);
    };

    fetchHolidaysData();
  }, [currentDate, countryCode]);

  const toggleModal = (date: string) => {
    setSelectedDate(date);
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <List onDragOver={handleDragOver}>
        {getDays(currentDate).map((day) => (
          <Item
            key={day}
            onClick={() => toggleModal(day.toString())}
            onDrop={handleDrop(day.toString(), tasks, setTasks)}
            onDragOver={handleDragOver}
          >
            <Wrapper>
              <Text>{day}</Text>
              <HolidayList
                holidays={holidays}
                currentDate={currentDate}
                day={day}
              />
            </Wrapper>
            {tasks[day]?.map((task: Task) => (
              <Card
                key={task.idTask}
                task={task}
                onDragStart={handleDragStart(day.toString())}
                onMoveUp={() =>
                  handleMoveUp(day.toString(), task.idTask, tasks, setTasks)
                }
                onMoveDown={() =>
                  handleMoveDown(day.toString(), task.idTask, tasks, setTasks)
                }
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
