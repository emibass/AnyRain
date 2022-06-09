import React from "react";

function WeatherData({temp, weather, icon, dayOfWeek, timeOfDay, rain}){

    return(
        <div className="container">
        <div className="flexItem">
         <div className="date"><p>{dayOfWeek}</p> 
         </div> 

          <p>{timeOfDay}</p>
          <p className="bold">{temp}&#8451;</p>
            <img className="smallIcon"
            alt={weather}
            src={`../${icon}.png`}></img>
          <p>{rain}mm / 3h</p>  
          </div>
     </div>
    )
            }

export default WeatherData;