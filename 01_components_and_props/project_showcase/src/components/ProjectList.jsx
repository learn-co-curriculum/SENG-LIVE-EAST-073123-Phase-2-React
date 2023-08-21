//rfc react functional component
//rfc 

//child component
export default function ProjectList(props) {

    console.log(props) //{ projects: Array(11)}
    console.log(props.projects) //(11) [{…}, {…}]

    let { projects } = props // object de-structuring 

    console.log(projects) //(11) [{…}, {…}]


  return (
    <div>ProjectList</div>
  )
}
