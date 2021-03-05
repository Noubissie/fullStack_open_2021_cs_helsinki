import React from "react"
import GetWeather from "./getweather"


const ShowCountry = ({country,weather})=>{
      const {name,population,languages,flag,capital}= country
      
  return(
    <div>
        <h2>{name}</h2>
        <p> Capital {capital}</p>
        <p> Population {population}</p>

        <h3>Languages</h3>
        <ul>
          {
            languages.map((currentlanguage)=>{
              return (
                <React.Fragment key={currentlanguage.name}>
                  <li>{currentlanguage.name}</li>
                </React.Fragment>
              )
            })
          }
        </ul>
        <img src={flag} alt="country flag"/>
        <h2>Weather in {capital}</h2>
        
        <GetWeather weather={weather}/>
        
        
    </div>
  )
}
export default ShowCountry