import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import  {initialState} from "./initialState"
import {MainHeader,StatisticHeader} from "./header"
import Statistics from "./Statistics"
import Button from "./Button"
import "./index.css"
// import logo from "./images/unicafe.svg"

export let ButtonContext = React.createContext()

let App = ()=>{

  

  const [state,setState] = useState(initialState);
  
  // const average = (state.good*1 + state.neutral*0 + state.bad*(-1))/(state.good+state.neutral+state.bad) || 0
  // const positive = (state.good)*100/(state.good+state.neutral+state.bad) || 0
  

  
  

  useEffect(()=>{
    setState({
      good:parseInt(localStorage.getItem("good")) || 0,
      neutral:parseInt(localStorage.getItem("neutral")) || 0,
      bad:parseInt(localStorage.getItem("bad")) || 0,
      average:function(){
        return parseFloat(localStorage.getItem("average")) || 0
      },
      positive:function (){
        return parseFloat(localStorage.getItem("positive")) || 0
      }
    })
  },[]);

  
  
  
  

  
  // let reset = ()=>{
  //   localStorage.clear()
  //   setState(initialState)
  // }

  

  const  handleState = (e)=>{
    /* Note: for older version of react the state is updated after the event 
    has expired making the object e=undefined hence this method won't work
    Thus for older version of react use the useRef hook
    */

    localStorage.clear()
    localStorage.setItem(e.target.value,state.good+1)
    localStorage.setItem("average",state.average())
    localStorage.setItem("positive",state.positive())

    setState((prevState)=>({
        ...prevState,
        [e.target.value]:prevState[e.target.value]+1,
        average: function(){
          return Math.abs((this.good*1 + this.neutral*0 + this.bad * -1)/(this.good+this.neutral+this.bad))
          },
        positive: function(){
            return (this.good)*100/(this.good+this.neutral+this.bad) 
            }
    })
    
  )
  

  

  }
  // (function savingSession(){
  //   localStorage.clear()
  //   localStorage.setItem("good",state.good)
  //   localStorage.setItem("bad",state.bad)
  //   localStorage.setItem("neutral",state.neutral)
  //   localStorage.setItem("average",state.average())
  //   localStorage.setItem("positive",state.positive())
  // })()
  
  
  

  return(
    
    <div >
         <MainHeader/>
            <div >
              <ButtonContext.Provider value={handleState}>
                <Button  />
              </ButtonContext.Provider>
              
            </div>
            
            <StatisticHeader />
            <div>
            {
              
              state.average()===Number(0) && state.positive() === Number(0)? "No FeedBack given": 
              <table >
              <tbody>
                <Statistics state={state}/>
              </tbody>
            </table>
            }
            </div>
            
            
            
          
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


