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
<CityInput />
<CurrentWeather />
<Forecast  />
<Footer />
</div>
  );
}

export default App;
