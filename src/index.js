function searchCityForm(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInputElement.value;
}

let searchCityElement = document.querySelector("#search-city");
searchCityElement.addEventListener("submit", searchCityForm);
