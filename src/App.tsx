import React from "react";
import "./App.css";
import TaskProvider, { useTaskOption } from "./context/TaskContext";
import Home from "./pages/Home";

function App() {
  const taskProps = useTaskOption();

  return (
    <div className="App">
      <TaskProvider {...taskProps}>
        <Home />
      </TaskProvider>
    </div>
  );
}

export default App;
