function updateWeather(response) {
  let degreeElement = document.querySelector("#degree");
  let degree = response.data.temperature.current;
  degreeElement.innerHTML = Math.round(degree);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}
function userSearch(city) {
  let apiKey = "594b61tf99f8e42c306162ocb32f8ac6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateWeather);
}
function searchCityForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  userSearch(searchInput.value);
}

let searchCityElement = document.querySelector("#search-city");
searchCityElement.addEventListener("submit", searchCityForm);

userSearch("Dry Ridge");
