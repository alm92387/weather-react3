
import React, {useState} from "react"; 



export default function WeatherTemperature(props) {
  const [unit, setUnit ] = useState('farenheight');
  function convertToCelcius(event){
    event.preventDefault();
    setUnit("Celcius");
  }

  function convertToFarenheight(event) {
    event.preventDefault();
    setUnit("farenheight");
  }
  if (unit === "farenheight") {
      return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.farenheight)}</span>
      <span className="unit">°F | <a href = "/" onClick={convertToCelcius} >°C </a> </span> 
      
    </div>
  );
} else {
  let celcius = ((props.farenheight -32) * 5/9)
  return (
     <div className="WeatherTemperature">
      <span className="temperature">{Math.round(celcius)}</span>
      <span className="unit"> <a href = "/" onClick={convertToFarenheight} >°F | °C </a> </span> 
      
    </div>
  )
  ;
}
   }
