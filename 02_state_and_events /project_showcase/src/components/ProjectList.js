import ProjectListItem from "./ProjectListItem";
import { useState } from "react";

const ProjectList = ({ projects }) => {

  const [ searchTerm, setSearchTerm ] = useState("")

  const filteredProjects = projects.filter((project) => (
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  const projectListItems = filteredProjects.map((project) => (  
    <ProjectListItem key={project.id} {...project} />
  ));

  const getSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }

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

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;