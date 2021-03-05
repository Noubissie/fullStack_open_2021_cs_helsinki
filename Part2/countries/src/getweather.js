import React from "react"

const GetWeather =  ({weather})=>{
    const currentWeather = weather ? weather.current : undefined
    return currentWeather ?
      (
        <div>
        <b>temperature: {weather ? currentWeather.temperature:""}</b>
        {
          currentWeather.weather_icons.map((icon)=>{
              
            return (
              <React.Fragment key={icon}>
                <img src={icon} alt="weather icon"/>
              </React.Fragment>
            )
          })
        }
      </div>
      )
      :""
  }

  export default GetWeather


