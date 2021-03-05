import React from "react"
const Persons = ({search,persons})=>{

    return(
    <div>
        {search ? 
          persons.filter((person)=>person.name.toLowerCase().includes(search.toLowerCase())).map((person)=>{
            return(
              <React.Fragment key={person.name}>
                  <p >{person.name} {person.number}</p>
              </React.Fragment>
              
            )
          })
        
        : persons.map((person)=>{
          return(
            <React.Fragment key={person.name}>
                <p >{person.name} {person.number}</p>
            </React.Fragment>
            
          )
        })}
      </div>
    )
}
export default Persons