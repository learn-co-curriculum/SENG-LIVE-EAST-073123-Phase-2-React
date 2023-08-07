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
  },[]);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const completeEditing = () => {
    setProjectId(null);
  };

  const onEditingProject = (editedProject) => {

    const editedProjects = projects.map((project) => {
      if(project.id === editedProject.id){
        return editedProject
      }else{
        return project
      }
    })

    setProjects(editedProjects)
  }

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const onDeleteProject = (deletedId) => {
    console.log("hello")
    const woDeleted = projects.filter((project) => {
      return project.id !==deletedId
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
          // onDeleteProject={onDeleteProject}
        />
      );
    } else {
      return <ProjectForm onAddProject= 
                {onAddProject} />;
    }
  };



  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode}  
         onToggleDarkMode={onToggleDarkMode} />
      
      {renderForm()}
      
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteProject={onDeleteProject}
        
      />
    </div>
  );
};

export default App;
