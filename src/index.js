import "./App.css"
import City from "./City"
import Image from "./Image" 
import Date from "./Date"
import Weather from "./Weather"
// import FooterOpenSource from "./FooterOpenSource"
import Buttons from "./Buttons"

export default function App() {
  return (
    <div className="App">

      <Buttons />
      <City />
      <Image />
      <Date />
      <Weather />
      {/* <FooterOpenSource  /> */}
      
    </div>
  );
}