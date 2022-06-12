import React from "react";

function WeatherData({temp, weather, icon, dayOfWeek, timeOfDay, rain}){

    return(
        <div className="flexItem">

         <div className="date bold">
         <p>{dayOfWeek}</p> 
         <p>{timeOfDay}:00</p>
         </div> 

         <p><img className="smallIcon"
         alt="rain icon by Freepik"
         src="../icons/water.png"></img>
         </p>

         <p>{rain}mm/3h</p>
          
         <p className="bold">{temp}&#8451;</p>

         <p> <img className="smallIcon"
            alt={weather}
            src={`../icons/${icon}.png`}></img>
         </p>  
          </div>
    )
            }

export default WeatherData;