import React, {useEffect, useState} from "react";
import WeatherData from "./WeatherData";
import CurrentWeather from "./CurrentWeather";

function WeatherTable(){

  const [weatherInfo, setWeatherInfo] = useState();
  const [listItems, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);


    function loadWeatherData() {

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        setIsLoading(true);
    fetch("/API/weather")
    .then((res) => res.json())
    .then((res) => {

        setItems(res.data);
        setIsLoading(false);
        setWeatherInfo((res.data.list).map(forecast => {
          return {
            temp: Math.round(forecast.main.temp),
            weather: forecast.weather[0].description,
            icon: forecast.weather[0].icon,
            dayOfWeek: daysOfWeek[new Date(forecast.dt_txt).getDay()],
            // timeOfDay: new Date(forecast.dt_txt).getHours(), // How to get the correct local time? 
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
   <div className="middle">
   {weatherInfo ?
     <CurrentWeather 
       temp = {Math.round(listItems.list? listItems.list[0].main.temp : null)}
       description = {listItems.list? listItems.list[0].weather[0].description : null}
       icon = {listItems.list? listItems.list[0].weather[0].icon : null}
     />
     : null}
   </div>
   {listItems.city ?
  <div className="container">
        <div className="location">
       {listItems.city ?  <h2>{listItems.city.name}, {listItems.city.country}</h2> : null}
    </div>

    <div className="container">
    <div className="bottom">
    {!!weatherInfo && weatherInfo.map((i , index) => (
      <div key={index}>
      <WeatherData 
        // timeOfDay={i.timeOfDay}
        temp={i.temp} 
        icon={i.icon}
        dayOfWeek={i.dayOfWeek}
        rain={i.rain}
        />
    </div>))}
    </div>
    </div>

</div>  
: null }
</div>
 )};

}
export default WeatherTable;