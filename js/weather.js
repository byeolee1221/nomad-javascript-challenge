const API_KEY = "e04e02dd83b64294f219a49dbc3c2c13";

const onMyLocationWeather = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(weatherUrl).then((response) => response.json()).then((data) => {
    const weatherSpan = document.querySelector(".weather");
    const locationSpan = document.querySelector(".location");
    weatherSpan.textContent = `${data.weather[0].main}`;
    locationSpan.textContent = data.name;
  });
}

const onError = () => {
  alert("위치를 찾지 못했습니다.");
}

navigator.geolocation.getCurrentPosition(onMyLocationWeather, onError);