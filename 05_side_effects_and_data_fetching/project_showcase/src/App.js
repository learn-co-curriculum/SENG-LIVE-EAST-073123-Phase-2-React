import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  // const [ count, setCount ] = useState(0)

  console.log(" ------ component rendering ----- ")

  useEffect( () => { //1. callback function as the first argument
    console.log(" side effect rendering ")
    fetch("http://localhost:4000/projects")
         .then(response => response.json())
         .then(data => setProjects(data))
  }, []) //2. no dependency array

  // useEffect(() => {
  //     const timerId = setInterval(() => {
  //       console.log("timer side effect happening")
  //       setCount((prevCount) => prevCount +1 )
  //     }, 1000) //every 1 second

  //     //cleaning up
  //     return (() => {
  //       console.log("cleaning up")
  //       clearInterval(timerId)
  //     })
  // }, [ count ])

  // const handleClick = () => {
  //   fetch("http://localhost:4000/projects")
  //     .then(response => response.json())
  //     .then(data => setProjects(data))
  // }

  const onAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm onAddProject={ onAddProject } />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
