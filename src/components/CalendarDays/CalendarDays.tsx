import React from "react";
import { getDays } from "../../utils";
import { Item, List, Text } from "./CalendarDays.styled";

export interface CalendarDaysProps {
  currentDate: Date;
}

export const CalendarDays: React.FC<CalendarDaysProps> = ({ currentDate }) => {
  return (
    <List>
      {getDays(currentDate).map((day) => (
        <Item key={day}>
          <Text>{day}</Text>
        </Item>
      ))}
    </List>
  );
};
