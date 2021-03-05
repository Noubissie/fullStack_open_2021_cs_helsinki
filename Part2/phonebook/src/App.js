import './App.css';
import React, { useState,useEffect} from 'react'
import Filter from "./Filter"
import PersonForm from "./PersonForm"
import Persons from "./Persons"
import axios from "axios"
import {personsDataUrl} from "./dataUrl"

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search,setSearch] = useState('')

  const [errorNewNameColor,seterrorNewNameColor] = useState("black")

  // const submitForm = ()=>{

  // }
  const handleNameInput = (event)=>{
      setNewName(event.target.value)
  }

  const handleNumberInput = (event)=>{
    setNewNumber(event.target.value)
  }

  const handlesearch = (event)=>{
    setSearch(event.target.value)
  }

  const addNewName = (event)=>{
    event.preventDefault()
    if(!persons.find(person=>{
      return person.name === newName 
    })){
      setPersons(persons.concat({name:newName,number:newNumber}))
      setNewName("")
      setNewNumber("")
      seterrorNewNameColor("black")
    }
    else{
      alert(`${newName} is already in the phonebook`)
      seterrorNewNameColor("red")
    }
    
    
  }
  useEffect(() => {
      const dataAsync = async ()=>{
        const data = await axios(personsDataUrl)
        setPersons(data.data)
      }
      dataAsync()
  }, [])
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handlesearch={handlesearch} search={search}/>
      <h3>Add a new</h3>
      <PersonForm  
          style={{border:`solid 1px ${errorNewNameColor}`}} 
          handleNameInput={handleNameInput}
          newName={newName}
          handleNumberInput={handleNumberInput}
          newNumber={newNumber}
          addNewName={addNewName}
          />
      
      <h2>Numbers</h2>
      <Persons search={search} persons={persons}/>
      
    </div>
  )
}

export default App
