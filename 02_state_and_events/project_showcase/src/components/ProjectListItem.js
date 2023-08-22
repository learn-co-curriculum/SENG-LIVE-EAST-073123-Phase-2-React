import {useState} from "react"  //1. import the useState hook
const ProjectListItem = ({ id, about, image, link, name, phase }) => {

  const [ clapCount, setClapCount] = useState(0)
  //2. defined the state and setter function with the initial val


  const handleClap =  () => {
    //5 define the event handler function
    //6 trigger the setter function to update the state with new value, which causes re-render
    const newClapCount = clapCount + 1
    setClapCount(newClapCount)
    console.log(newClapCount)
  }

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick = {handleClap}>👏{clapCount}</button>
        {/* //3. in JSX, add the clapCount  */}
        {/* //4 add onClick event with the event handler */}
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
};

export default ProjectListItem;
