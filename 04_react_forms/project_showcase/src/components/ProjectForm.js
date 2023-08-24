import React, {useState} from "react";

const ProjectForm = ({ onAddProject }) => {

  const initialForm = {
    name:"",
    about:"",
    phase:0,
    link:"",
    image:""
  }

  const [ formData, setFormData ] = useState(initialForm)

  const handleOnChange = (e) => {
    // console.log(e.target)
    // console.log(e.target.name)
    // console.log(e.target.value)
    
    const { name, value } =  e.target //object de-structuring

    // setFormData((previousFormData) => ({
    //   ...previousFormData, //spread the previous data
    //   [name]:value //add the new name and value
    // })) //why using square bracket? bc this is the key. Also we want it to be dynamic based on the name of the target

    //shorter version
    setFormData({...formData, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //what is the new project? --> formData
    onAddProject(formData)

    setFormData(initialForm)

  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          onChange={handleOnChange}
          value={formData.name}
        />

        <label htmlFor="about">About</label>
        <textarea 
          id="about" 
          name="about" 
          onChange={handleOnChange}
          value={formData.about}
          />

        <label htmlFor="phase">Phase</label>

        <select 
          name="phase" 
          id="phase"
          onChange={handleOnChange}
          value={formData.phase}
          >
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text" 
          id="link" 
          name="link" 
          onChange={handleOnChange}
          value={formData.link}
          />

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          onChange={handleOnChange}
          value={formData.image}
          />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
