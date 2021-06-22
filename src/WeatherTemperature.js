
import React from "react";


export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.farenheight)}</span>
      <span className="unit">°F</span>
    </div>
  );
}