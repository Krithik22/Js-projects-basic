/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/
let cityName = document.getElementById('city-name')
let weatherType = document.getElementById('weather-type')
let temp = document.getElementById('temp')
let minTemp = document.getElementById('min-temp')
let maxTemp = document.getElementById('max-temp')
 
// API_KEY for maps api
const API_KEY = "b8526fc0c9b7a4dc68c384c61f10457b";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
/* const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '92dcc65779mshc4348c8c2ef356bp11836ejsn19fcec52def2',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
    const URL = `https://open-weather13.p.rapidapi.com/city/${city}`

  fetch(URL, options)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    showWeatherData(response)
   })
  .catch(err => console.error(err));
      
};*/
const getWeatherData = (city) => {
   //const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  //CODE GOES HERE
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data
    })
    .catch(err => console.log(err))
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  let city = document.getElementById('city-input').value;
  // CODE GOES HERE
    console.log(city)
    const data = await getWeatherData(city)
    showWeatherData(data)
    city = ''
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
    //CODE GOES HERE
    cityName.innerText = weatherData.name
    weatherType.innerText = weatherData.weather[0].main
    temp.innerText = weatherData.main.temp
    minTemp.innerText = weatherData.main.temp_min
    maxTemp.innerText = weatherData.main.temp_max
    // console.log({cityName,weatherType,temp,minTemp,maxTemp})
}

// const searchBtn = document.getElementById('searchBtn')
// searchBtn.addEventListener("click",searchCity)
