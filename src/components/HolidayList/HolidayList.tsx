import React from "react";
import { Text } from "./HolidayList.styled";

interface Holiday {
  date: string;
  name: string;
}

interface HolidayListProps {
  holidays: Holiday[];
  currentDate: Date;
  day: string;
}

export const HolidayList: React.FC<HolidayListProps> = ({
  holidays,
  currentDate,
  day,
}) => {
  const formattedDay = `${currentDate.getFullYear()}-${(
    "0" +
    (currentDate.getMonth() + 1)
  ).slice(-2)}-${("0" + day).slice(-2)}`;

  const holidayNames = holidays
    .filter((holiday) => holiday.date === formattedDay)
    .map((holiday) => holiday.name);

  return (
    <div>
      {holidayNames.map((holidayName, index) => (
        <Text key={`${formattedDay}-${index}`}>{holidayName}</Text>
      ))}
    </div>
  );
};
