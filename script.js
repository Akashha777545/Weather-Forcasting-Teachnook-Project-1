const apiKey = '2ba646b915a1428cbe08ab8fb6ce02e3';

async function getWeather() {
  const city = document.getElementById('city').value;
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    if (data.cod === 200) {
      displayWeather(data);
    } else {
      alert("City not found!");
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayWeather(data) {
  document.getElementById('cityName').innerText = data.name;
  document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
  document.getElementById('description').innerText = `Condition: ${data.weather[0].description}`;
  document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
  document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} km/h`;
}
