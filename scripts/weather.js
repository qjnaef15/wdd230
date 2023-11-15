// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Declare a const variable named "url" and assign it a valid URL string as given in the openweathermap api documentation.
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Specify the latitude and longitude of Trier, Germany
const lat = 46.245205022453206; // Replace with the actual latitude
const lon = -119.18209240663104;  // Replace with the actual longitude

// Set the units to imperial: "units=imperial"
const units = 'imperial';

// Provide your API key
const apiKey = '493485c1b041185d95a0b516f6a6a100'; 

// Define an asynchronous function named "apiFetch()"
async function apiFetch() {
  try {
    // Construct the complete URL with query parameters
    const apiUrl = `${url}?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

    // Fetch data from the OpenWeatherMap API
    const response = await fetch(apiUrl);

    // Check if the response is OK
    if (response.ok) {
      // Convert the response to JSON
      const data = await response.json();

      // Output the results to the console for testing
      console.log(data);

      // Call the displayResults function to update the HTML
      displayResults(data);
    } else {
      // If the response is not OK, throw an error with the response text
      throw Error(await response.text());
    }
  } catch (error) {
    // Output any errors to the console
    console.log(error);
  }
}

// Invoke the apiFetch() function
apiFetch();

// Build the displayResults function to output to the given HTML document
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${iconCode}.png`;
  const desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}