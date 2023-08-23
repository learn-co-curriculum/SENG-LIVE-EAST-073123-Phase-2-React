export default function ProjectItem({ project }) {

  //object de-structuring
  const { id, about, image, link, phase, name } = project

  return (
    <li className = "card">
      <figure className = "image">
        <img src = {image} alt={name} />
        <button className = "claps">👏{0}</button>
      </figure>

      <section className = "details">
         <h4> {name} </h4>
         <p>{about}</p>
         {link? (
          <p>
            <a href={link}>Link</a>
          </p>
         ): null}
      </section>
          
      <footer className = "extra">
        <span className = "badge blue">phase{phase}</span>
      </footer>

    </li>
  )
}