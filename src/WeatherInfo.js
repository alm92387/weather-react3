
import React from "react";
import FormattedDate from "./FormattedDate";
import Image from "./Image";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
  return (
      
          <div className="WeatherInfo">
             <h1>{props.data.city}</h1>
          <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>     
 <Image code={props.data.icon} size={props.size} /> 
               <WeatherTemperature farenheight={props.data.temperature} />
          
 <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
            </ul>
            </div>


   );}
