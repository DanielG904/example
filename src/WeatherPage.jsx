import { useEffect, useState } from "react";
import WeatherTab from "./weather/WeatherTab.jsx";
import WeatherTabs from "./weather/WeatherTabs.jsx";
import WeatherBlock from "./weather/WeatherBlock.jsx";
import WeeklyForecast from "./weather/WeeklyForecast.jsx";
import { fetchCityData, fetchCityWeather } from "./api/weather.js";
import DailyForecast from "./weather/DailyForecast.jsx";
import { motion } from "motion/react";

const cities = ["Sydney", "Wollongong", "Byron Bay"];

export default function WeatherPage() {
  const [cityData, setCityData] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCityWeather, setSelectedCityWeather] = useState(null);
  const isLoading = selectedCity == null;

  async function getCityData() {
    let data = await fetchCityData(cities);
    setCityData(data);
    setSelectedCity(data[0]);
    fetchCityWeather(data[0]).then(setSelectedCityWeather);
  }

  useEffect(() => {
    getCityData();
  }, []);

  function handleTabClick(cityName) {
    if (cityName == selectedCity.name) return;
    const city = cityData.find((c) => c.name === cityName);
    if (!city) return;
    setSelectedCity(city);
    setSelectedCityWeather(null);
    fetchCityWeather(city).then(setSelectedCityWeather);
  }

  console.log("city weather: ", selectedCityWeather);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {cityData === null ? (
        "Loading..."
      ) : (
        <>
          <WeatherTabs>
            {cityData.map((city) => (
              <WeatherTab
                onClick={() => handleTabClick(city.name)}
                isSelected={city.name == selectedCity?.name}
              >
                {city.name}
              </WeatherTab>
            ))}
          </WeatherTabs>
        </>
      )}
      <div className="bg-white flex ">
        {selectedCityWeather ? (
          <>
            <WeatherBlock title="Today">
              <DailyForecast
                times={selectedCityWeather.hourly.time?.slice(1, 25)}
                temps={selectedCityWeather.hourly.temperature_2m?.slice(1, 25)}
              />
            </WeatherBlock>
            <WeatherBlock title="7 day forecast">
              <WeeklyForecast
                days={selectedCityWeather.daily.time}
                maxTemps={selectedCityWeather.daily.temperature_2m_max}
                minTemps={selectedCityWeather.daily.temperature_2m_min}
              />
            </WeatherBlock>
          </>
        ) : (
          <div className="min-h-30 grid place-items-center">Loading...</div>
        )}
      </div>
    </motion.div>
  );
}
