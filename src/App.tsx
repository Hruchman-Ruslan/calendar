import { Calendar } from "./components";
import { Container } from "./components/shared";
import { TaskProvider } from "./components/shared/TaskContext";

function App() {
  return (
    <>
      <TaskProvider>
        <Container>
          <Calendar />
        </Container>
      </TaskProvider>
    </>
  );
}

export default App;
