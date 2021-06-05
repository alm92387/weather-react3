import React from "react";
let updateCity = "city"



export default function Form(props) {
  return (
    <div className="form">
           <input type="search" placeholder="city" onChange= {updateCity}/>    
    </div>
  );
}