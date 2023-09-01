import React from "react";
import { Link } from "react-router-dom"

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <nav>
        <h1 className="branding">
          <span className="logo">{"//"}</span>
          Project Showcase
        </h1>
        <div className="navigation">
          <Link 
              to = "/projects"
              className="button">
            All Projects
          </Link>
          <Link 
              to = "/projects/new"
              className="button" >
            Add Project
          </Link>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
