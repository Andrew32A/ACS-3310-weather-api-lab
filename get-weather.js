const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

export async function getWeather(apikey, zip, units = "imperial") {
  const apiKey = `${apikey}`;
  const path = `${BASE_URL}zip=${zip}&appid=${apiKey}&units=${units}`;

  const res = await fetch(path);
  const data = await res.json();

  return {
    temperature: data.main.temp,
    description: data.weather[0].description,
  };
}

export async function getWeatherByZip(apikey, zip, unit = "imperial") {
  const path = `${BASE_URL}zip=${zip}&appid=${apikey}&units=${unit}`;
  const res = await fetch(path);
  return await res.json();
}

export async function getWeatherByCity(apikey, city, unit = "imperial") {
  const path = `${BASE_URL}q=${city}&appid=${apikey}&units=${unit}`;
  const res = await fetch(path);
  return await res.json();
}

export async function getWeatherByGeo(apikey, coords, unit = "imperial") {
  const path = `${BASE_URL}lat=${coords.lat}&lon=${coords.lon}&appid=${apikey}&units=${unit}`;
  const res = await fetch(path);
  return await res.json();
}
