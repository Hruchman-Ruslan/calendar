import { useState, useCallback } from "react";
import { useMonths } from "../../utils";
import { Section } from "../shared";
import { CalendarDays, CalendarHeader, WeekDays } from "..";

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const months = useMonths();

  const nextMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const nextMonthDate = new Date(prevDate);
      nextMonthDate.setMonth(prevDate.getMonth() + 1);
      return nextMonthDate;
    });
  }, []);

  const previousMonth = useCallback(() => {
    setCurrentDate((prevDate) => {
      const previousMonthDate = new Date(prevDate);
      previousMonthDate.setMonth(prevDate.getMonth() - 1);
      return previousMonthDate;
    });
  }, []);

  return (
    <Section>
      <CalendarHeader
        previousMonth={previousMonth}
        nextMonth={nextMonth}
        months={months}
        currentDate={currentDate}
      />
      <WeekDays />
      <CalendarDays currentDate={currentDate} />
    </Section>
  );
};
