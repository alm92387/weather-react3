import React from "react";
import Image from "./Image";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast (props) {
    // let [setForecast] = useState(null);

     function handleResponse(response) {
    // setForecast(response.data.daily);

  }

    let apiKey = "74c14200946b4fbc59b8a95c822aab0e";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return (
        <div className = "WeatherForecast">
            <div className = "row" > 
            
            <div className = "col" > 
            <div className = "WeatherForecast-day"> THU </div> 
            <Image code= "01d" size={10}/> 
            <div className = "WeatherForecast-temps"> 
            <span className = "WeatherForecast-temp-max">
                 MAX |
                <span className = "WeatherForecast-temp-min">
                
                MIN 
            </span>
            </span>
            </div>    
            </div>
            </div>
        </div>
    )
}