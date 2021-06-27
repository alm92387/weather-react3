// import React from "react";
import Image from "./Image";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast (props) {
    function handleResponse (response) { 

    }
    let apiKey = "74c14200946b4fbc59b8a95c822aab0e";
    let longitude = props.coordinates.lon;
    let lattitude = props.coordinates.lat;
    let apiURL =`https://api.openweathermap.org/data/2.5/onecall?lat=${lattitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleResponse);
    
    return (
        <div className = "WeatherForcast">
            <div className = "row" > 
            <div className = "col" > 
            <div className = "WeatherForcast-day"> THU </div> 
            <Image code= "01d" size={10}/> 
            <div className = "WeatherForcast-temps"> 
            <span className = "WeatherForcast-temp-max">
                 MAX |
                <span className = "WeatherForcast-temp-min">
                
                MIN 
            </span>
            </span>
            </div>    
            </div>
            </div>
        </div>
    )
}