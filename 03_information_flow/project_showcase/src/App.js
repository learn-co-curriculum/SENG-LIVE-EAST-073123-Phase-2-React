

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {


  return (
    <div className="App">
      <Header />
      <ProjectForm />
      <button >Load Projects</button>
      {/* <ProjectList  /> */}
    </div>
  );
};

export default App;
