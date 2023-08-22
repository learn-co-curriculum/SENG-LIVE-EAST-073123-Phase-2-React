import ProjectListItem from "./ProjectListItem";
import { useState } from "react"

const ProjectList = ({ projects }) => {

  const [ searchTerm, setSearchTerm ] = useState("")
  //1. identify state, setter function using useState hook

  //3. Define the event handler logic 
  const getSearchTerm = (e) => {
      //4. In that logic, using the setter function. setSearchTerm, update the current state// e.target.value
    setSearchTerm(e.target.value)
  }

  //5. Filter the projects using, .filter method and .includes
  const filteredProjects = projects.filter((project) => (
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))
  console.log(filteredProjects)

  //6. utilize the filtered project for  projectListItem

  const projectListItems = filteredProjects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));
  //{...project}: '{...}' spread operator is used to spread the properties of the 'project' object.  


  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={getSearchTerm}/>
      {/* //2. retrieve the search term by adding onChange event and attach to the event handler  */}

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
