import React from "react";
import Grid from '@mui/material/Grid';

function WeatherData(props){

    return(
        <div className="container">
          <Grid container spacing={0.5} columns={1}>
                <Item>{props.temp}</Item>   
      </Grid>
        </div>
    )
            }

export default WeatherData;