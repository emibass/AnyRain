require("dotenv").config();
const path = require('path');
const express =require('express');
const cors     = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
const fetch = require('node-fetch');


let location;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
	res.send('PORT 8080');
});

//getting location from user input

app.post("/API/location", function (req, res){
  location = req.body.location;

if (!location){
  res.redirect("/error");
}else{
  res.redirect("/");
}

});


//getting weather forecast from OpenWeatherMap API

app.get("/API/weather", function (req, res){

const baseURL ="http://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = (process.env.API_KEY);

const URL = baseURL + location + API_KEY;

fetch(URL)
.then(res => res.json())
.then(data => {
	res.send({ data });
	})
.catch(err => {
	console.log(err);
	});

});

//current weather Info from OpenWeatherMap

app.get("/API/currentWeather", function (req, res){

const cwURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY_cw = (process.env.API_KEY_cw);

const fullURL = cwURL + location + API_KEY_cw;

fetch(fullURL)
.then(res => res.json())
.then(data => {
	res.send({data});
	})
.catch(err => {
	console.log(err);
});
});

app.listen(PORT, () => {
    console.log(app.get("env").toUpperCase() + " Server started on port " + (PORT));
 });