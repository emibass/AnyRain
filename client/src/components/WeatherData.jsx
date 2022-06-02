import React from "react";

function WeatherData(props){

    return(
        <div className="container">
        <table>
        <thead>
            <th>Temperature</th>
            <th>Weather</th>
            <th>Any rain?</th>
            </thead>
            <tbody>
        <tr>
            <td>{props.temp}&#8451;</td>
            <td>{props.icon}</td>
            <td>{props.rain}</td>
        </tr>
        </tbody>
        </table>
        </div>
    )
            }

export default WeatherData;