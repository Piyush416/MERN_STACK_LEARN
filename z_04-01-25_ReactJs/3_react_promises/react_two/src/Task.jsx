import React from 'react'



// const Task = (props) => {
//   // console.log(props); // this data is come in object
//   return (
//     <div>
//       <h1>Hey {props.name}, This is Your Task...</h1>
//     </div>
//   )
// }


// Explain the deconstruct 
// const props = {
//   name : "Jayshree"
// }
// to get data we use props.name
// deconstruct that object using 
// const {name} = props
// console.log(name);
// this how we deconstruc the object 


// we deconstruct the object so we donot have to write props.name
// instead we write only name
const Task = ({name, work}) => {
  // console.log(props); // this data is come in object
  return (
    <div>
      <p>Hey <strong> {name} </strong>, Learning <strong> {work} </strong> is your today Task...</p>
    </div>
  )
}

export default Task
