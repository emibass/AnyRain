import React, {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


//getAllCities

function CityInput() {

const [city, setCity] = useState("");

function selectCity(event) {
    const newValue = (event.target.value);
    setCity(newValue);
}

return(
    <div className="container">
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel  id="cityInput">City</InputLabel>
      <Select
        labelId="labelID"
        id="city"
        value={city}
        onChange={selectCity}
        label="City"
        autoComplete="on"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Auckland"}>Auckland</MenuItem>
        <MenuItem value={"Katowice"}>Katowice</MenuItem>
        <MenuItem value={"Krakow"}>Krakow</MenuItem>
      </Select>
    </FormControl>
    </div>
)
}

export default CityInput;
