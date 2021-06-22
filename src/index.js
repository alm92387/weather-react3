import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import City from "./City";
import Weather from "./Weather";
import FooterOpenSource from "./FooterOpenSource";
import Buttons from "./Buttons";

export default function App() {
  return (
    <div>
    <div className="weather-app">
     
      <Buttons />
      {/* <City /> */}
      <Weather defaultCity="New York" />
      </div>
    <span className="footer"> 
    <FooterOpenSource  />
    </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);