import React from "react";

function CurrentWeather ({temp, description, icon}){
    return (
        <div className="container">
            <h2 className="description">{description}</h2>
          <h1 className="big">{temp}&deg;C</h1><img className="bigIcon" alt={description}  src={`../${icon}.png`}></img>
        </div>
    )
};

export default CurrentWeather;