export default function ProjectList({projects}) {
  console.log(projects)


  const project = projects.map((eachp)=> {
   console.log(eachp)
  })
  return (
    <>
      <div>ProjectList</div>
      <div>{project}</div>
    </>
  )
}