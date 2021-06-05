import React from "react";
let updateCity = "city"

// function updateCity(event) {
//   event.preventDefault();
//   setCity(event.target.value);

export default function Form(props) {
  return (
    <div className="form">
           <input type="search" placeholder="city" onChange= {updateCity}/>    
    </div>
  );
}