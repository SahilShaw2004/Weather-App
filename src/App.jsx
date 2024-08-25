import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const currentDate = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  const [city, setCity] = useState("Kolkata");
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "75a15ea98f9ef630f03ea92e6b941880";
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (e) {
      console.error("Error fetching weather data", e);
    }
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };
  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clear":
        return "/sun.webp";
      case "Drizzle":
        return "/rain_with_cloud.webp";
      case "Rain":
        return "/thunder.webp";
      case "Haze":
        return "/Tornado.webp";
      case "Clouds":
        return "/Cloud.png";
      default:
        return null;
    }
  };
  return (
    <div className="App">
      <div className="container">
        {weatherData && (
          <>
            <h1 className="container_date">{formattedDate}</h1>
            <div className="weather_data">
              <h2 className="container_city">{weatherData.name}</h2>
              <img
                className="container_img"
                src={getWeatherIconUrl(weatherData.weather[0].main)}
                width="180px"
                alt="Weather Icon"
              />
              <h2 className="container_degree">
                {(weatherData.main.temp - 273.15).toFixed(2)}°C
              </h2>
              <div className="country_per">{weatherData.weather[0].main}</div>
              <form action="" className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter City name"
                  onChange={handleInputChange}
                />
                <button type="submit">Get</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
