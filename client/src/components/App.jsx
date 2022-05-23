import React, { useState } from "react";
import Header from "./Header";
import CityInput from "./CityInput";
import WeatherData from "./WeatherData";

function App() {

  return (
    <div>   
<Header />
<CityInput />
<WeatherData />  
   </div>
  );
}

export default App;
