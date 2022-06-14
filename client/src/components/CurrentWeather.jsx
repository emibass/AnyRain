
import React, {useState, useEffect} from "react";

function CurrentWeather (){

const [currentWeather, setCurrentWeather] = useState({});

function loadCurrentWeather(){

  fetch("/API/currentWeather")
  .then((res) => res.json())
  .then((res) => {

  setCurrentWeather(res.data);
  })
};

useEffect(() => {loadCurrentWeather()}, []);

return (
<div>
  {currentWeather.weather ? 
  <div className="middle">

          <h2 className="description">{currentWeather.weather? currentWeather.weather[0].description : null}</h2>
          <h1 className="big">{currentWeather.main ? Math.round(currentWeather.main.temp) : null }&deg;C</h1>
          <img className="bigIcon" alt='weather Icons by flaticon Freepick'
          src={`../icons/${currentWeather.weather? currentWeather.weather[0].icon : null}.png`}></img>
        </div>
    : null  }
    </div>
    )

}
export default CurrentWeather;