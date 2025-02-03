function updateWeather(response) {
  let degreeElement = document.querySelector("#degree");
  let degree = response.data.temperature.current;
  degreeElement.innerHTML = Math.round(degree);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;

  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  console.log(date);
  timeElement.innerHTML = formatDate(date);

  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;

  console.log(response.data.temperature);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}
function formatDate(date) {
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleString(`en-US`, options);
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
function displayForecast() {
  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = ` <div class="day-forecast">
                <div class="day">Mon</div>
                <div class="icon-forecast">👒</div>
                <div class="temp">
                    <div class="temp-high">
                        <strong>70°</strong>
                    </div>
                    <div class="temp-low">65°</div>
                </div>
            </div>`;
}
let searchCityElement = document.querySelector("#search-city");
searchCityElement.addEventListener("submit", searchCityForm);

userSearch("Dry Ridge");
displayForecast();
