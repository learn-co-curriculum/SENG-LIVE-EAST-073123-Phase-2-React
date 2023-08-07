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

  const onEditProject = (editedProject) => {
    // console.log("hello from the APP")
    // console.log(projects)
    // console.log(editedProject)
      //1 we need to find the selected project in the state, projects
      //2 replace that project with the newly edited project
      //3 update the whole projects using the setter function 
      const editedProjects = projects.map((project) => {
        if(project.id === editedProject.id){
          return editedProject
        }else{
          return project
        }
      })

      setProjects(editedProjects)
    
      console.log(editedProjects)
  }

  const onDeleteProject = (deletedId) => {
    console.log(" hello from the app let's delete!")
    //1 we have to iterate the projects state, get each project
    //2 if that project's id matches the deletedId, then we want to take that off
    //and we still need to continue to iterate and finish the iteration
    //3 we need an array without the matching project
    //4 use the setter function to update the state
    const woDeleted = projects.filter((project) => {
      return project.id !== deletedId
    })
    console.log(woDeleted)
    setProjects(woDeleted)

  }

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          onEditProject = {onEditProject}

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
