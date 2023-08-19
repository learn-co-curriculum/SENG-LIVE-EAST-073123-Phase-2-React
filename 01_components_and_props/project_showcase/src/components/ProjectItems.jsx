
export default function ProjectItems( {project }) {
     console.log(project)


  return (
    <>
    
     <article>
          <h1>
              { project.name}
          </h1>

          <h2>
               {project.about}
          </h2>
     </article>
    </>
  )
}
