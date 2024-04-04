//getting all the variables from index.html
const temp = document.querySelector(".temp");
const cityname = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".wind");
const searchBar = document.querySelector(".search input");
const search = document.querySelector(".search button");
const weatherimage = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const details = document.querySelector(".details");
const error = document.querySelector(".error");

//getting the data from api noting its api key and url
const apiKey = "a7543991ba1edbfe3bc62a0321c70bf1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//adding async function to get response from the api
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    error.style.display = "block";
    weather.classList.add("hidden");
    details.classList.add("hidden");
  } else {
    var data = await response.json();
    console.log(data);
    temp.innerHTML = Math.round(data.main.temp) + "°c";
    cityname.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";
    windspeed.innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      weatherimage.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherimage.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherimage.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherimage.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      weatherimage.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherimage.src = "images/mist.png";
    }

    weather.classList.remove("hidden");
    details.classList.remove("hidden");
    error.style.display = "none";
  }
}

search.addEventListener("click", function () {

  checkWeather(searchBar.value);
  searchBar.value = "";
});
