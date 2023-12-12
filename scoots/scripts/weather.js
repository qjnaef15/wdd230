// Define kelvinToFahrenheit function if not already defined
if (typeof kelvinToFahrenheit === "undefined") {
    var kelvinToFahrenheit = (kelvin) =>
      ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
  }
  
  const apiURL =
    "https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&appid=493485c1b041185d95a0b516f6a6a100";
  const apiAlertURL =
    "https://api.weatherbit.io/v2.0/alerts?lat=20.5083&lon=-86.9458&key=4de158cf051f47099414b4e20d158489";
  
  const alertsContainer = document.getElementById("alerts");
  
  const displayWeatherAlerts = () => {
    fetch(apiAlertURL)
      .then((response) => response.json())
      .then((data) => {
        // Check if there are alerts
        if (data.alerts && data.alerts.length > 0) {
          // Display alerts
          alertsContainer.innerHTML = "<h2>Weather Alerts</h2>";
          data.alerts.forEach((alert) => {
            alertsContainer.innerHTML += `<p>${alert.title}</p>`;
          });
        } else {
          // No alerts
          alertsContainer.innerHTML = "<p>No weather alerts at the moment.</p>";
        }
      })
      .catch((error) => {
        console.error("Error fetching weather alerts:", error);
        alertsContainer.innerHTML =
          "<p>Error fetching weather alerts. Please try again later.</p>";
      });
  };
  
  const displayCurrentWeather = (currentData) => {
    const temperature = kelvinToFahrenheit(currentData.main.temp);
    const icon = currentData.weather[0].icon;
    const description = currentData.weather[0].description.toUpperCase();
    const humidity = `Humidity: ${currentData.main.humidity}%`;
  
    document.getElementById(
      "weather-icon"
    ).style.backgroundImage = `url('https://openweathermap.org/img/w/${icon}.png')`;
    document.getElementById("temperature").textContent = `${temperature}°F`;
    document.getElementById("description").textContent = description;
    document.getElementById("humidity").textContent = humidity;
  };
  
  const displayTomorrowForecast = (forecastList) => {
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  
    const filteredForecast = forecastList.filter((forecast) => {
      const forecastDate = new Date(forecast.dt_txt);
      return forecastDate.getDate() === tomorrowDate.getDate();
    });
  
    if (filteredForecast.length > 0) {
      const forecastContainer = document.createElement("div");
      forecastContainer.classList.add("forecast-item");
  
      const dayElement = document.createElement("p");
      dayElement.classList.add("day");
      dayElement.textContent = "Tomorrow";
  
      const temperatureElement = document.createElement("p");
      temperatureElement.classList.add("temperature");
      temperatureElement.textContent = `${kelvinToFahrenheit(
        filteredForecast[0].main.temp
      )}°F`;
  
      forecastContainer.appendChild(dayElement);
      forecastContainer.appendChild(temperatureElement);
  
      document.getElementById("one-day-forecast").appendChild(forecastContainer);
    }
  };
  
  const getWeatherAndForecast = async () => {
    await displayWeatherAlerts();
    const response = await fetch(apiURL);
    const weatherData = await response.json();
  
    displayCurrentWeather(weatherData.list[0]);
    displayTomorrowForecast(weatherData.list);
  };
  
  // Call the main function
  getWeatherAndForecast();
  