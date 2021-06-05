import React, { useState } from "react";
import axios from "axios";


export default function Weather (props){
let [city, setCity] = useState("");
let [temperature, setTemperature] = useState("");
let [description, setDescription] = useState(""); 
let [humidity, setHumidity] = useState(""); 
let [wind, setWind] = useState(""); 
let [icon, setIcon] = useState("");


let apiKey = "74c14200946b4fbc59b8a95c822aab0e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
${city}&appid=${apiKey}&units=imperial`;


function handleSubmit(event) {
  event.preventDefault();
  axios.get(apiUrl).then(setWeather);
}


function setWeather (response) {
setCity (Math.round(response.data.main.name));
setTemperature (Math.round(response.data.main.temp));
setDescription (response.data.weather[0].description);
setHumidity (Math.round(response.data.main.humidity));
setWind (Math.round(response.data.wind.speed));
setIcon (`http://openweathermap.org/img/wn/${
  response.data.weather[0].icon
}@2x.png`);
};


  return (
    <div className="search" onSubmit={handleSubmit}>
      <ul> 
      <li> City:
         {city} 
      </li>
      <li> Temperature: {temperature} ℉ </li>
      <li> Description: {description} </li>
      <li> Humidity: {humidity} </li>
      <li> Wind: {wind} </li>
      <li> <img src={icon} alt="clear" /> </li>
            </ul>
      </div>
    );
  }
