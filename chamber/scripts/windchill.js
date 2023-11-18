// Function to convert temperature from Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => {
    const f = (kelvin - 273.15) * 1.8 + 32;
    return f.toFixed(0);
};

const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=46.2396&lon=-119.1006&appid=493485c1b041185d95a0b516f6a6a100';

const getWeatherAndForecast = async () => {
    // Fetch current weather
    const currentResponse = await fetch(apiURL2);
    const currentJsObject = await currentResponse.json();

    // Fetch three-day forecast
    const forecastResponse = await fetch(apiURL2);
    const forecastJsObject = await forecastResponse.json();

    // Display current weather
    displayCurrentWeather(currentJsObject);

    // Display three-day forecast
    displayThreeDayForecast(forecastJsObject);
};

const displayCurrentWeather = (currentData) => {
    const temperature = kelvinToFahrenheit(currentData.list[0].main.temp);
    const wind = currentData.list[0].wind.speed;
    const windChill = calculateWindChill(parseInt(temperature), parseInt(wind));

    // Get the icon and description from the first item in the forecast list
    const icon = currentData.list[0].weather[0].icon;
    const description = currentData.list[0].weather[0].description.toUpperCase();

    // Update the HTML elements with the current weather information
    document.getElementById('temp').textContent = temperature;
    document.getElementById('wind').textContent = wind;
    document.getElementById('windchill').textContent = windChill;

    // Update the weather icon
    const weatherIconElement = document.getElementById('weathericon');
    const iconSrc = `https://openweathermap.org/img/w/${icon}.png`;
    weatherIconElement.setAttribute('src', iconSrc);
    weatherIconElement.setAttribute('alt', description);

    // Update the description
    const descriptionElement = document.querySelector('#weather figcaption');
    descriptionElement.textContent = description;
};

const displayThreeDayForecast = (forecastData) => {
    // Assuming that the API response provides a list of forecast items
    const forecastList = forecastData.list;

    // Assuming the forecast items are returned in 3-hour intervals
    const dailyForecast = groupByDay(forecastList);

    // Display the forecast data as needed
    for (const [day, temperatures] of Object.entries(dailyForecast)) {
        const averageTemperature = calculateAverageTemperature(temperatures);
        
        // Create elements to display forecast information
        const forecastContainer = document.createElement('div');
        forecastContainer.classList.add('forecast-item');

        const dayElement = document.createElement('p');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        const temperatureElement = document.createElement('p');
        temperatureElement.classList.add('temperature');
        temperatureElement.textContent = `${averageTemperature}°F`;

        // Append forecast information to the container
        forecastContainer.appendChild(dayElement);
        forecastContainer.appendChild(temperatureElement);

        // Append the container to the HTML (you might need to adjust the selector based on your HTML structure)
        document.getElementById('weather').appendChild(forecastContainer);
    }
};

// Function to group forecast items by day
const groupByDay = (forecastList) => {
    const dailyForecast = {};

    forecastList.forEach((forecast) => {
        const timestamp = new Date(forecast.dt_txt);
        const day = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(timestamp);

        if (!dailyForecast[day]) {
            dailyForecast[day] = [];
        }

        dailyForecast[day].push(kelvinToFahrenheit(forecast.main.temp));
    });

    return dailyForecast;
};

// Function to calculate average temperature
const calculateAverageTemperature = (temperatures) => {
    const sum = temperatures.reduce((acc, temperature) => acc + parseInt(temperature), 0);
    return Math.round(sum / temperatures.length);
};

// Function to calculate wind chill
const calculateWindChill = (temp, wind) => {
    if (temp < 50 && wind >= 3) {
        const chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temp * Math.pow(wind, 0.16)));
        return chill.toFixed(0);
    }
    return 'N/A';
};

// Call the function to get the current weather and three-day forecast
getWeatherAndForecast();
