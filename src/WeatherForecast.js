import React, { useState , useEffect  } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props) {
    let [loaded, setLoaded] = useState (false);
    let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);


     function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded (true);

  }

  function load() {
         let apiKey = "74c14200946b4fbc59b8a95c822aab0e";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }
    if (loaded)
    { return (
        <div className = "WeatherForecast">
            <div className = "row" >   
            <div className = "col" > 
           <WeatherForecastDay data= {forecast[0]} />
            </div>
            </div>
        </div>
    );
}  else {
 
    
     load();

    return null;;

    }}