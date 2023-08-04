import React, { useState } from "react";
import Header from "./components/Header";
// import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [ count, setCount ] = useState(0)

  const handleClick = () => {
    fetch("http://localhost:4000/projects")
      .then(response => response.json())
      .then(data => setProjects(data))
  }

  const onAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <h1>{count}</h1>
      <button onClick={handleClick}> Load Projects </button>
      {/* <ProjectForm onAddProject= { onAddProject } /> */}
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
