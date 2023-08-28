import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [ count, setCount ] = useState(0)

  // const handleClick = () => {
  //   fetch("http://localhost:4000/projects")
  //     .then(response => response.json())
  //     .then(data => setProjects(data))
  // }

  console.log("-----component rendering -----")

  useEffect(() => { //callback function as the first arg
      console.log(" side effect rendering ")
      fetch("http://localhost:4000/projects")
      .then(response => response.json())
      .then(projects => setProjects(projects))
  //}) // no dependency array
  }, []) // add an empty dependency array as the second argument 

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     console.log(" timer side effect is happening")
  //     setCount((prevCount) => prevCount + 1)
  //   }, 1000)

  //   return (() => {
  //     console.log("cleaning up")
  //     clearInterval(timerId)
  //   })
  // }, [ count ])

  // console.log(count)

  const onAddProject = (newProject) => {
    setProjects([...projects, newProject]);
  };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <h1>{count}</h1>
      {/* <button onClick={handleClick}> Load Projects </button> */}
      <ProjectForm onAddProject= { onAddProject } />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
