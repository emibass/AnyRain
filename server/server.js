require("dotenv").config();
const path = require('path');
const express =require('express');
const cors     = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;
// const axios = require('axios');
const fetch = require('node-fetch');


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
	res.send('PORT 8080');
});


app.get("/API/weather", function (req, res){

const URL = (process.env.OPEN_WEATHER_URL);

fetch(URL)
.then(res => res.json())
		.then(data => {
			res.send({ data });
		})
		.catch(err => {
			console.log(err);
		});

//axios option to get data
// axios.get(URL)
//   .then(res => console.log(res.data));

});

app.listen(PORT, () => {
    console.log(app.get("env").toUpperCase() + " Server started on port " + (PORT));
 });