import React, {useEffect, useState} from "react";


function WeatherTable(){

    function loadWeatherData() {
        setIsLoading(true);
    fetch("/API/weather")
    .then((res) => res.json())
    .then((res) => {
        setItems(res.data.list);
        setIsLoading(false)
    });
    };

const [listItems, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {loadWeatherData()}, []);


if(isLoading){
    return <p>Loading ...</p>
}

else{


// const icon = "http://openweathermap.org/img/wn/" + {listItems.list[0].weather[0].icon} + "@2x.png";
    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // const d = new Date();
    // let day = weekday[d.getDay()];

 return (
    
<div>
{listItems.map((listItem) =>{
 return (

<p key={listItem.dt}>{Math.round(listItem.main.temp)} &#8451;</p>
)})}
</div>
 )};

}
export default WeatherTable;