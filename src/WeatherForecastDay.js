import React from "react";
import Image from "./Image";

export default function WeatherForecastDay (props) {
return (
    <div> 
     <div className = "WeatherForecast-day"> {props.data.dt} </div> 
            <Image code= {props.data.weather[0].icon} size={10}/> 
            <div className = "WeatherForecast-temps"> 
            <span className = "WeatherForecast-temp-max">
                 {props.data.temp.max}°|
                <span className = "WeatherForecast-temp-min">
                {props.data.temp.min}° 
            </span>
            </span>
            </div>       
            </div>
)
}