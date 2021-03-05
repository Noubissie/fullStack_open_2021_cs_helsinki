import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import "./index.css"

const App = (props) => {
  let {anecdotes} =  props

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(anecdotes.reduce((acc,current,currentIndex)=>{return (acc[currentIndex]=0,acc)},{}))
  let sizeAnecdotes = props.anecdotes.length
  
  let maxVote = Object.entries(vote).sort((x,y)=>y[1]-x[1])[0]
  
   
  let handleVote = (e)=>{

    setVote((prev)=>({
      ...prev,
      [selected]:prev[selected] +1
    })
    )
  }
  let handleState = (e)=>{
    setSelected(Math.floor(Math.random()*sizeAnecdotes))
  }
   
  return (
    <>
      <div>
        <h3>Anecdote of the day</h3>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {vote[selected]} votes
      </div>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleState}>Selected</button>
      </div>
      <div>
        <h3>Anecdote with most votes</h3>
        {props.anecdotes[maxVote[0]]}
      </div>
      <div>
        has {maxVote[1]} votes
      </div>
    </>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>,
  document.getElementById('root')
);


