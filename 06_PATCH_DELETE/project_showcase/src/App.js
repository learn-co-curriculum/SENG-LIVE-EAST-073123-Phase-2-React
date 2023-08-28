import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };


  //1. need to find the selected project in the state, projects
  //2. replace that project with the newly edited project
  //3. update the whole project using the setter function 

  const onEditingProject = (editedProject)  => { //obj
    const editedProjects = projects.map((project) => {
      if(project.id === editedProject.id){
        return editedProject
      }else{
        return project
      } 
    })
    setProjects(editedProjects) //array
  }

  const onDeleteProject = (deletedId) => {
    //1 we have to iterate the projects get each project
    //2 if one project's id matches the deletedID then we want to take that off
    //3 we still need to continue iterating and finish the iteration
    //4 we need an array without that matching project
    //5 which array method should we use? 
    const woDeleted = projects.filter((project) => {
      return project.id !== deletedId
    })

    console.log(woDeleted)
    setProjects(woDeleted)
  }

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          onEditingProject={onEditingProject}

        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteProject = {onDeleteProject}
      />
    </div>
  );
};

export default App;
