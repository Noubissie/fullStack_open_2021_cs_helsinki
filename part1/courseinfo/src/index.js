import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({course})=>{
  let {name} = course
  return (
    <h1>{name}</h1>
    )
}

const Part = ({part,exercises})=>{

  return(
      <p>
        {part} {exercises}
      </p>
  )
}
const Content = ({course})=>{
  let {parts} = course
  //deconstructing props 
  let {name:part1Name,exercises:part1Exercise}=parts[0]
  let {name:part2Name,exercises:part2Exercise}=parts[1]
  let {name:part3Name,exercises:part3Exercise}=parts[2]

  return(
    <>
      {/* <Part part={part1.name} exercises={part1.exercises}/>
      <Part part={part2.name} exercises={part2.exercises}/>
      <Part part={part3.name} exercises={part3.exercises}/> */}
      <Part part={part1Name} exercises={part1Exercise}/>
      <Part part={part2Name} exercises={part2Exercise}/>
      <Part part={part3Name} exercises={part3Exercise}/>
    </>
  )
}
const Total = ({course})=>{
  let {parts} = course
  let {exercises:part1Exercise}=parts[0]
  let {exercises:part2Exercise}=parts[1]
  let {exercises:part3Exercise}=parts[2]
  return (
    // <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    <p>Number of exercises {part1Exercise + part2Exercise + part3Exercise}</p>
  )
}
const App = () => {
  // const-definitions
  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))