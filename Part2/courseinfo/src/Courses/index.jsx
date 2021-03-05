import React from "react"


const Header = ({ course }) => {
    const {name:courseName} = course
    return (
      <h1>{courseName}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const {parts} = course 
    // const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    const sum = parts.reduce((acc,nextValue)=>acc+nextValue.exercises,0)
    return(
      <p> * <b>Total of {sum} exercise</b></p>
    ) 
  }
  
  const Part = (props) => {
      const {name,exercises} = props.part
    return (
      <p>
        * {name} {exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    const {parts} = course
    return (
      <div>
        {
          parts.map((part)=>{
            return(
              <React.Fragment key={part.id}>
                  <Part part={part} />
              </React.Fragment>
            )
          })
        }
      </div>
    )
  }
  
  
  const Course = ({course})=>{
  
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }

export default Course