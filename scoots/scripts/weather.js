const kelvinToFahrenheit = (kelvin) => ((kelvin - 273.15) * 1.8 + 32).toFixed(0);

const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&appid=493485c1b041185d95a0b516f6a6a100';

const getWeatherAndForecast = async () => {
    const response = await fetch(apiURL);
    const weatherData = await response.json();

    displayCurrentWeather(weatherData.list[0]);
    displayThreeDayForecast(weatherData.list);
};

const displayCurrentWeather = (currentData) => {
    const temperature = kelvinToFahrenheit(currentData.main.temp);
    const icon = currentData.weather[0].icon;
    const description = currentData.weather[0].description.toUpperCase();

    document.getElementById('weather-icon').style.backgroundImage = `url('https://openweathermap.org/img/w/${icon}.png')`;
    document.getElementById('temperature').textContent = `${temperature}°F`;
    document.getElementById('description').textContent = description;
};

const displayThreeDayForecast = (forecastList) => {
    const dailyForecast = groupByDay(forecastList);

    for (const [day, temperatures] of Object.entries(dailyForecast)) {
        const averageTemperature = calculateAverageTemperature(temperatures);

        const forecastContainer = document.createElement('div');
        forecastContainer.classList.add('forecast-item');

        const dayElement = document.createElement('p');
        dayElement.classList.add('day');
        dayElement.textContent = day;

        const temperatureElement = document.createElement('p');
        temperatureElement.classList.add('temperature');
        temperatureElement.textContent = `${averageTemperature}°F`;

        forecastContainer.appendChild(dayElement);
        forecastContainer.appendChild(temperatureElement);

        document.getElementById('three-day-forecast').appendChild(forecastContainer);
    }
};

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

const calculateAverageTemperature = (temperatures) => {
    const sum = temperatures.reduce((acc, temperature) => acc + parseInt(temperature), 0);
    return Math.round(sum / temperatures.length);
};

getWeatherAndForecast();
