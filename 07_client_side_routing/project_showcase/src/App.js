import { useState, useEffect } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";
import ProjectPage from "./components/ProjectPage"
import Home from "./components/Home";

import {
  Route,
  Routes
} from "react-router-dom"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);

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

  const onUpdateProject = (updatedProj) => {
    const updatedProjects = projects.map((ogProject) => {
      if (ogProject.id === updatedProj.id) {
        return updatedProj;
      } else {
        return ogProject;
      }
    });
    setProjects(updatedProjects);
  };

  const onDeleteProject = (deletedProj) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== deletedProj.id
    );
    setProjects(updatedProjects);
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />

      <Routes >
          <Route path="/"
                 element={<Home />} />

          <Route path="/projects"
                 element={<ProjectList
                            projects={projects}
                            onDeleteProject={onDeleteProject}
                          />} />

          <Route path="/projects/:id/edit"
                 element={<ProjectEditForm 
                        onUpdateProject={onUpdateProject} />} />

          <Route path="/projects/new"
                 element={<ProjectForm 
                            onAddProject={onAddProject} />} 
                            />
      </Routes>
    </div>
  );
};

export default App;
