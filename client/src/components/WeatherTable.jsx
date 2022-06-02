import React, {useEffect, useState} from "react";
// import WeatherData from "./WeatherData";

function WeatherTable(){

    function loadWeatherData() {
        setIsLoading(true);
    fetch("/API/weather")
    .then((res) => res.json())
    .then((res) => {
     
        setItems(res.data);
        setIsLoading(false)
    });
    };

const [listItems, setItems] = useState({});
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {loadWeatherData()}, []);


// function showWeather (listItem) {
//     return (
//   <WeatherData
//     key={listItem.dt}
//     temp={Math.round(listItem.main.temp)}
//     icon={listItem.weather.icon}
//     rain={listItem.clouds.all}
//     />
//     )};
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
   
    <div className="container">
   
   <div className="container">
        <div className="top">
       {listItems.city ?  <h2>{listItems.city.name}</h2> : null}
        
       </div>
       <p> {new Date().toUTCString()}</p>
 
    </div>
{/* current weather  6 h intervals starting at 3am */}
    {/* {data.name !== undefined && */}

    <div className="bottom"> 
    <div className="weather">
     {listItems.list ? <img src={"http://openweathermap.org/img/wn/" + listItems.list[1].weather[0].icon + "@2x.png"} alt="icon" width="50" height="50"/> : null}
     {listItems.list ? <p>{listItems.list[1].weather[0].description}</p> : null}
   </div>
   <div className="temp">
   {listItems.list ? <h1>{Math.round(listItems.list[1].main.temp)}°C</h1> : null}
   </div>
 <div className="date">
 {listItems.list ? <p>{listItems.list[1].dt_txt}</p> : null}
 </div>
 </div>
 
      <div className="bottom"> 
     <div className="weather">
          {listItems.list ? <img src={"http://openweathermap.org/img/wn/" + listItems.list[3].weather[0].icon + "@2x.png"} alt="icon" width="50" height="50"/> : null}
          {listItems.list ? <p>{listItems.list[3].weather[0].description}</p> : null}
        </div>
        <div className="temp">
        {listItems.list ? <h1>{Math.round(listItems.list[3].main.temp)}°C</h1> : null}
        </div>
        {/* <div className="rain">
        <h2>Rain?</h2>
        {listItems.list.rain ? <h2>{listItems.list[3].rain["3h"]}</h2> : <p>nope</p>}
         </div> */}
      <div className="date">       
 {listItems.list ? <p>{listItems.list[3].dt_txt}</p> : null}
      </div>
    </div>



{/* // forecast at 6h intervals */}

<div className="bottom"> 
<div className="weather">
     {listItems.list ? <img src={"http://openweathermap.org/img/wn/" + listItems.list[5].weather[0].icon + "@2x.png"} alt="icon" width="50" height="50"/> : null}
     {listItems.list ? <p>{listItems.list[5].weather[0].description}</p> : null}
   </div>
   <div className="temp">
   {listItems.list ? <h1>{Math.round(listItems.list[5].main.temp)}°C</h1> : null}
   </div>
 <div className="date">
 {listItems.list ? <p>{listItems.list[5].dt_txt}</p> : null}
 </div>
</div>

<div className="bottom"> 
<div className="weather">
     {listItems.list ? <img src={"http://openweathermap.org/img/wn/" + listItems.list[7].weather[0].icon + "@2x.png"} alt="icon" width="50" height="50"/> : null}
     {listItems.list ? <p>{listItems.list[7].weather[0].description}</p> : null}
   </div>
   <div className="temp">
   {listItems.list ? <h1>{Math.round(listItems.list[7].main.temp)}°C</h1> : null}
   </div>
 <div className="date">

 {listItems.list ? <p>{listItems.list[7].dt_txt}</p> : null}
 </div>
</div>

</div>  

 )};

}
export default WeatherTable;