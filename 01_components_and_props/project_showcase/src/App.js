import Header from "./components/Header.jsx"
import ProjectList from "./components/ProjectList.jsx"
import ProjectItems from "./components/ProjectItem.jsx"

import projects from "./projects.js"

function App() {

  console.log(projects)
  return (
    <>
      <div className="App">Project showcase
        <Header />
        <ProjectList projects={projects} />
        <ProjectItems />
      </div>;
    </>
)}

export default App;
