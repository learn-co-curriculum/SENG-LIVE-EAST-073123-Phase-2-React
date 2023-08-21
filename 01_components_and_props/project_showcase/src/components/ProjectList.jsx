//rfc react functional component
//rfc 
import ProjectItem from "./ProjectItem"

export default function ProjectList({ projects }) {

    const projectMap = projects.map((eachP) => {
        return   <ProjectItem key={eachP.id} project = {eachP}/>
    })
    // console.log(".MAP", projectMap)


    // const projectForEach = projects.forEach((eachP) => eachP)
    // console.log(".ForEach", projectForEach)

  return (
    <>
        <div>ProjectList</div>
        {projectMap} 
    </>
  )
}
