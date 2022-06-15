import React, { useState } from "react";
import Header from "./Header";
import CityInput from "./CityInput";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";

function App() {

  return (
<div>
<Header />
<div className="wrapper">
<CityInput />
<CurrentWeather />
<Forecast  />
</div>
<Footer />
</div>
  );
}

export default App;
