import { useState } from "react";
import { useMonths } from "../../utils";
import { Section } from "../shared";
import { CalendarDays, CalendarHeader, WeekDays } from "..";

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [countryCode, setCountryCode] = useState("UA");
  const months = useMonths();

  const nextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonthDate = new Date(prevDate);
      nextMonthDate.setMonth(prevDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  const previousMonth = () => {
    setCurrentDate((prevDate) => {
      const previousMonthDate = new Date(prevDate);
      previousMonthDate.setMonth(prevDate.getMonth() - 1);
      return previousMonthDate;
    });
  };

  const handleCountryChange = (newCountryCode: string) => {
    setCountryCode(newCountryCode);
  };

  return (
    <Section>
      <CalendarHeader
        previousMonth={previousMonth}
        nextMonth={nextMonth}
        months={months}
        currentDate={currentDate}
        onCountryChange={handleCountryChange}
      />
      <WeekDays />
      <CalendarDays currentDate={currentDate} countryCode={countryCode} />
    </Section>
  );
};
