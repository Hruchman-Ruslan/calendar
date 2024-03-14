import React, { useRef, useState } from "react";
import { useMonths } from "../../utils";
import { Section } from "../shared";
import { CalendarDays, CalendarHeader, WeekDays } from "..";
import { Value as Difficulty } from "../Select/Select";
import html2canvas from "html2canvas";

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [countryCode, setCountryCode] = useState("UA");
  const [searchText, setSearchText] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);
  const months = useMonths();
  const calendarRef = useRef(null);

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleChangeDifficulty = (difficulty: Difficulty | null) => {
    setSelectedDifficulty(difficulty);
  };

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

  const downloadFullPageImage = () => {
    html2canvas(document.body).then((canvas) => {
      const link = document.createElement("a");
      link.download = "calendar.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <Section ref={calendarRef}>
      <CalendarHeader
        previousMonth={previousMonth}
        nextMonth={nextMonth}
        months={months}
        currentDate={currentDate}
        onCountryChange={handleCountryChange}
        handleSearchTextChange={handleSearchTextChange}
        searchText={searchText}
        selectedDifficulty={selectedDifficulty}
        onChangeDifficulty={handleChangeDifficulty}
        onDownloadButtonClick={downloadFullPageImage}
      />
      <WeekDays />
      <CalendarDays
        currentDate={currentDate}
        countryCode={countryCode}
        searchText={searchText}
        selectedDifficulty={selectedDifficulty}
      />
    </Section>
  );
};
