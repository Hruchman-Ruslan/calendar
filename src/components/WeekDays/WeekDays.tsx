import { Item, List, Text } from "./WeekDays.styled";

export const WeekDays = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <List>
      {days.map((day, index) => (
        <Item key={index}>
          <Text>{day}</Text>
        </Item>
      ))}
    </List>
  );
};
