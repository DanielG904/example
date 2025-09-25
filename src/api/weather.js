export async function fetchCityData(cityNames) {
  // This function fetches city longitude/latitude from an API
  // in a real app this would be better stored long term (eg in a database
  // or resource file) to prevent excessive fetches

  let urls = cityNames.map(
    (name) =>
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        name
      )}&count=30&language=en&format=json&countryCode=AU`
  );

  try {
    const results = await Promise.all(
      urls.map((url) => fetch(url).then((res) => res.json()))
    );
    return results.map((result) => {
      let city = result.results[0];
      return { name: city.name, lat: city.latitude, long: city.longitude };
    });
  } catch (err) {
    console.log("Error fetching city data: ", err);
  }
}

export async function fetchCityWeather(cityData) {
  try {
    let response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${cityData.lat}&longitude=${cityData.long}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&hourly=temperature_2m&timezone=Australia%2FSydney`
    );
    return await response.json();
  } catch (err) {
    console.log("Error fetching city data: ", err);
  }
}
