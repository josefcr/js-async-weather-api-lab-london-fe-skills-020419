const API_KEY = "b2f9f62edbe9bd86e6537a2d7e3c9f74"

//handle submit event

function handleFormSubmit(event) {
  document.addEventListener('submit', function(event) {
    event.preventDefault()
  const city = document.getElementById('city').value 
  console.log(city)
  fetchCurrentWeather(city)
  
})
}

//fetch current weather based on city
function fetchCurrentWeather(city) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b2f9f62edbe9bd86e6537a2d7e3c9f74`)
  .then(response => response.json())
  .then(json => displayCurrentWeather(json))
}

//render current weather data to the DOM using provided IDs and json from API
function displayCurrentWeather(json) {
  let displayMain = json.main.temp
  document.getElementById('temp').innerHTML= displayMain
  let displayLow = json.main.temp_min
  document.getElementById('low').innerHTML= displayLow
  let displayHigh = json.main.temp_max
  document.getElementById('high').innerHTML= displayHigh
  let displayHumidity = json.main.humidity
  document.getElementById('humidity').innerHTML= displayHumidity
  let displayCloud = json.clouds
  document.getElementById('cloudCover').innerHTML= displayCloud
  console.log(json)
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
   handleFormSubmit()
})
