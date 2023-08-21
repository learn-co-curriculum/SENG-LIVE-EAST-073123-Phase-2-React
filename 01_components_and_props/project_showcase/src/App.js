import Header from "./components/Header"
import ProjectList from "./components/ProjectList"
import projects from "./projects"

//parent component
function App() {
  //inside of JSX
  //wrap the project data 
  //in the curly braces bc the projects is JS
  //we use a key name for a prop, this time, it's called "projects" but the key name could be anything that describe the prop
  return (
      <div className="App">Project showcase
        <Header />
        <ProjectList 
          projects={projects}
          num = {3}
          str="hello"/>
      </div>
  )
}

export default App;
