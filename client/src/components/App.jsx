import React, { useState } from "react";
import Header from "./Header";
import CityInput from "./CityInput";
import WeatherTable from "./WeatherTable";

function App() {

  return (
    <div>   
<Header />
<CityInput />
<WeatherTable />  
   </div>
  );
}

export default App;
