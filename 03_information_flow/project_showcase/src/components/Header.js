const Header = ({ isDarkMode, onToggleDarkMode }) => {

  const buttonTextContent = isDarkMode ? "Dark Mode" : "Light Mode" ;

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
