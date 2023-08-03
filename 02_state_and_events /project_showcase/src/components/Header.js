import React, { useState } from "react";

const Header = ( {handleCss} ) => {

  const [ isDarkMode, setIsDarkMode ] = useState(false)

  function handleToggle(){
    setIsDarkMode(!isDarkMode)
    handleCss(isDarkMode)
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick = {handleToggle}> {isDarkMode? `Dark Mode`: `Light Mode`}</button>
    </header>
  );
}

export default Header;
