import React,{useState,useEffect} from "react"
import {countryDataUrl} from "./dataUrl"
import axios from "axios"
import './App.css';
import ShowCountry from "./showCountry"
import initialStates from "./initialStates"







let App =()=>{

  const [state,setState] = useState(initialStates)

  // let [countries,setCountries] = useState([]) 
  // let [InputfilterCountry,setFilterCountry] = useState("")
  // const [showCountryView,setShowCountry] = useState("")
  // const [weather,setWeather] = useState()

  const setWeatherFunc = async (capital)=>{
    let weatherData = await axios(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`)
    // setWeather(weatherData.data) // delete
    setState((prev)=>({
      ...prev,
      weather:weatherData.data
    }))
  } 

  
  const handleCountryFilter = (event)=>{
      // setFilterCountry(event.target.value)  // delete
      
      setState((prev)=>({
        ...prev,
        InputfilterCountry: event.target.value
      }))
      
      const x = state.countries.filter((currentValue)=>currentValue.name.toLowerCase().includes(event.target.value.toLowerCase()))
      x.length === 1 && setWeatherFunc(x[0].capital) 

      
  }

  
  
  const handleShowCountry = (event)=>{
    event.preventDefault()
    let [name,capital] = event.target.value.split(",");
    // setShowCountry(name) // delete
    setState((prev)=>({
      ...prev,
      showCountryView:name
    }))
    
    setWeatherFunc(capital)
  }


  useEffect(()=>{
    const countryAsyncData = async ()=>{
      const data = await axios(countryDataUrl)
      // setCountries(data.data) //delete

      setState((prev)=>({
        ...prev,
        countries:data.data
      }))
      
    }
    countryAsyncData()
  },[])


  let visibleCountries = state.countries.filter((currentValue)=>currentValue.name.toLowerCase().includes(state.InputfilterCountry.toLowerCase()))

  return(
      <div>
        <form>
          <div>find countries: <input onChange={handleCountryFilter} value={state.InputfilterCountry}/></div>
          <div>
            { 
              visibleCountries.length === 1 ? 
              <ShowCountry country={visibleCountries[0]} weather={state.weather} />:
              (
                state.InputfilterCountry === ""? "" :
                visibleCountries.length >10 ?
                  "Too many matches,specify another filter":
                  visibleCountries.map((currentValue)=>{
                    return (
                      <div key={currentValue.name}>
                        {currentValue.name}
                        <button onClick={handleShowCountry} value={`${currentValue.name},${currentValue.capital}`} capital={currentValue.capital}>show</button>
                        {state.showCountryView === currentValue.name? <ShowCountry country={currentValue} weather={state.weather}/>:""}
                        
                      </div>
                    )
                  })
                )
            }
          </div>
        </form>
      </div>
  )
}


export default App;
