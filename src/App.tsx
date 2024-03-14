import { Calendar } from "./components";
import { Container } from "./components/shared";
import { TaskProvider } from "./context";

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
