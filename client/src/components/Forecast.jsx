import React, {useEffect, useState} from "react";
import ForecastData from "./ForecastData";

function Forecast(){

  const [weatherInfo, setWeatherInfo] = useState();
  const [listItems, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);


    function loadWeatherData() {

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    setIsLoading(true);

 
    fetch("/API/weather")
    .then((res) => res.json())
    .then((res) => {

        setItems(res.data); // listItems
        setIsLoading(false);
        setWeatherInfo((res.data.list).map(forecast => {
          return {
            temp: Math.round(forecast.main.temp),
            weather: forecast.weather[0].description,
            icon: forecast.weather[0].icon,
            dayOfWeek: daysOfWeek[new Date(forecast.dt_txt).getDay()],
            timeOfDay: new Date(forecast.dt_txt).getTime(),
            rain: forecast.rain? forecast.rain["3h"] : 0,
          }
        }))
    });
    };

    useEffect(() => {loadWeatherData()}, []);


if(listItems.cod === '404'){

  return (
  <div className="container">
  <div className="not_found">
    <p>city not found, try again </p>
    <p>check spelling or</p>
    <p>maybe add the country code like so: Paris, FR</p>
  </div>
  </div>
  )
} 

else if(isLoading){
    return <p>Loading ...</p>
}

else {

 return (
  <div>   
   {listItems.city ?
  <div>
        <div className="location">
       {listItems.city ?  <h2>{listItems.city.name}, {listItems.city.country}</h2> : null}
    </div>


    <div className="bottom">
    {!!weatherInfo && weatherInfo.map((i , index) => (
      <div key={index}>
      <ForecastData
        timeOfDay= {listItems.city ? new Date ((i.timeOfDay) + (listItems.city.timezone * 1000)).getHours() : null}
        temp={i.temp} 
        icon={i.icon}
        dayOfWeek={i.dayOfWeek}
        rain={i.rain}
        />
    </div>))}
    </div>
 

</div>  
: null }
</div>
 )};

}
export default Forecast;