import Header from "./components/Header"
import ProjectList from "./components/ProjectList"
import ProjectItems from "./components/ProjectItems"
import Form from "./components/Form"
import projects from "./projects"

function App() {
  return <div className="App">Project showcase
    <Header /> 
    <Form />
    <ProjectList 
      projects = {projects} 
      num = {3} 
      str = "hello" />
    <ProjectItems /> 
  </div>;
}

export default App;