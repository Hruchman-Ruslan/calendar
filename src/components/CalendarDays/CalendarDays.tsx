import React, { useState, useEffect } from "react";
import {
  handleDragOver,
  handleDrop,
  handleDragStart,
  handleMoveDown,
  handleMoveUp,
  getDays,
} from "../../utils";
import { Modal } from "..";
import { Form } from "..";
import { Card } from "../Card/Card";
import { Item, List, Text, Wrapper } from "./CalendarDays.styled";
import { fetchHolidays } from "../../api";
import { HolidayList } from "../HolidayList/HolidayList";
import { Value } from "../Select/Select";
import { Task, useTask } from "../../context";

interface Holiday {
  date: string;
  name: string;
}

interface CalendarDaysProps {
  currentDate: Date;
  countryCode: string;
  searchText: string;
  selectedDifficulty: Value | null;
}

export const CalendarDays: React.FC<CalendarDaysProps> = ({
  currentDate,
  countryCode,
  searchText,
  selectedDifficulty,
}) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { tasks, setTasks } = useTask();
  const [holidays, setHolidays] = useState<Holiday[]>([]);

  const formattedDays = getDays(currentDate).map((day) => day.toString());

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

  const taskMatchesSearch = (task: Task) =>
    task.task.toLowerCase().includes(searchText.toLowerCase());

  const taskMatchesDifficulty = (task: Task) =>
    selectedDifficulty ? task.difficulty === selectedDifficulty : true;

  return (
    <>
      <List onDragOver={handleDragOver}>
        {formattedDays.map((day) => (
          <Item
            key={day}
            onClick={() => toggleModal(day)}
            onDrop={handleDrop(day, tasks, setTasks)}
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
            {tasks[day]
              ?.filter(taskMatchesSearch)
              .filter(taskMatchesDifficulty)
              .map((task: Task) => (
                <Card
                  key={task.idTask}
                  task={task}
                  onDragStart={handleDragStart(day)}
                  onMoveUp={() =>
                    handleMoveUp(day, task.idTask, tasks, setTasks)
                  }
                  onMoveDown={() =>
                    handleMoveDown(day, task.idTask, tasks, setTasks)
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
