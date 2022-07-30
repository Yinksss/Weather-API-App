const getWeatherData = (city) => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1161c58ae7mshc6bcc74ee99e250p10db6djsna5f53743afad',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?
location=${city}&u=f`, options)
	.then(response => response.json())
	.then(response => (response))
	.catch(err => console.error(err));
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data = await getWeatherData(city)
  showWeatherData(data) 

}

const showWeatherData = (weatherData) => {
   document.getElementById("temp").innerText = weatherData.current_observation.condition.temperature
   document.getElementById("city-name").innerText = weatherData.location.city
   document.getElementById("weather-type").innerText = weatherData.current_observation.condition.text
   document.getElementById("min-temp").innerText = weatherData.current_observation.astronomy.sunrise
   document.getElementById("max-temp").innerText = weatherData.current_observation.astronomy.sunset
}

