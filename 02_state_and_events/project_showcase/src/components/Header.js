import React, { useState } from "react";

const Header = ( {handleCss}) => {

  const [ isDarkMode, setIsDarkMode ] = useState(false)

  //1. add an onClick event to the button element in JSX
  //2. pass that onClick event to an event handler function called handleToggle
  //  the naming convention for handler is handle + action verb 
  //3. That handleToggle function will determine what happens upon that event 

  //conditional rendering : In JSX, ternary logic

  function handleToggle(){
      setIsDarkMode(!isDarkMode)
      // console.log(isDarkMode)
      handleCss(isDarkMode)
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggle}> {isDarkMode? 'Dark Mode':'LightMode'} </button>
    </header>
  );
}

export default Header;
