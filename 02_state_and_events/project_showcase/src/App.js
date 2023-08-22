import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import { useState } from "react"

import projects from "./projects";

const App = () => {

  const [cssToggle, setCssToggle] = useState(false)

  return (
    <div className={cssToggle? "App-light":"App"}>
      <Header handleCss={setCssToggle}/>
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
