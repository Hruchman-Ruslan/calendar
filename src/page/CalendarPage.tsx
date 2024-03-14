import { Calendar } from "../components";
import { TaskProvider } from "../context";

const CalendarPage = () => {
  return (
    <>
      <TaskProvider>
        <Calendar />
      </TaskProvider>
    </>
  );
};

export default CalendarPage;
