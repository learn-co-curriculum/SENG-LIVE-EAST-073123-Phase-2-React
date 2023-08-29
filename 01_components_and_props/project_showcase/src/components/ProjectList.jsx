import ProjectItems from "./ProjectItems"

const ProjectList = (props) => {

     console.log(props) // {projects: Array(11)}
     console.log(props.projects) //(11) [{…}... {…}]

     // let projects = props.projects
     // console.log(projects) //(11) [{…}... {…}]

     let { projects } = props  //object destructuring
     console.log(":::::", projects)
     
     let projectMap = projects.map((eachP) => eachP)
     console.log(projectMap) //(11) [{…}... {…}] //one line doesn't need a return keyword

     let projectMapMultiLine = projects.map( (eachP) => {
          return <ProjectItems project = {eachP} key = {eachP.id}/>
     })
     console.log(projectMapMultiLine) //(11) [{…}... {…}]

     let projectForEach = projects.forEach((eachP) => eachP)
     console.log(projectForEach) //undefined

     let projectForEachMultiLine = projects.forEach((eachP) => {
          return eachP
     })
     console.log(projectForEachMultiLine) //undefined

     return (
          <>
               {projectMapMultiLine}
          </>
     )
}
export default ProjectList