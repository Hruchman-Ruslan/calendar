import React, { useState } from "react";
import { getDays } from "../../utils";
import { Item, List, Text } from "./CalendarDays.styled";
import { Modal } from "..";

interface CalendarDaysProps {
  currentDate: Date;
}

export const CalendarDays: React.FC<CalendarDaysProps> = ({ currentDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prevState) => !prevState);

  return (
    <>
      <List>
        {getDays(currentDate).map((day) => (
          <Item key={day} onClick={toggleModal}>
            <Text>{day}</Text>
          </Item>
        ))}
      </List>
      {isModalOpen && <Modal toggle={toggleModal} />}
    </>
  );
};
