import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
// import Form from "./Form";
// import Header from "./Header";

import "./App.css";

function App() {
  return (    
  <div className="app">
      <Weather />
    {/* <Header />
    <Form /> */}
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



