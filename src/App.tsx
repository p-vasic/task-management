import { Route, Routes } from "react-router-dom";
import "./App.css";
import TaskProvider, { useTaskOption } from "./context/TaskContext";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

function App() {
  const taskProps = useTaskOption();

  return (
    <div className="App">
      <TaskProvider {...taskProps}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Edit />} />
        </Routes>
      </TaskProvider>
    </div>
  );
}

export default App;
