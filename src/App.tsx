import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { lazy } from "react";

const CalendarPage = lazy(() => import("./page/CalendarPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CalendarPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
