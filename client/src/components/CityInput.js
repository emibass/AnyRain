import React, {useState} from "react";



//getAllCities

function CityInput() {

const [location, setLocation] = useState("");

const searchLocation = (event) => {
 if (event.key === 'Enter') {
   setLocation(event.target.value);
  }
}

return(
    <div className="container">
 <div className="search">
 <form method="POST" action='/API/location'>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text"
          name="location" />
          </form>
      </div>
    </div>
)
}

export default CityInput;
