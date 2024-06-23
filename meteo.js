const url = 'https://api.open-meteo.com/v1/forecast?'

const parameters = {
	latitude: '37.248096',
	longitude: '-76.791190',
	temperature_unit: 'fahrenheit',
	wind_speed_unit: 'mph',
	precipitation_unit: 'inch',
	timezone: 'America/New_York',
	current: 'temperature_2m,is_day,precipitation,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m',
	hourly: 'temperature_2m,relative_humidity_2m,precipitation_probability,pressure_msl,surface_pressure,cloud_cover,visibility',
	daily: 'sunrise,sunset,daylight_duration,uv_index_max,precipitation_probability_max'
};

const urlParameters = new URLSearchParams(parameters);

console.log('calling openMeteo api');

fetch(url + urlParameters)
    .then(response => response.json())
    .then(data => {
      let temp = data.current.temperature_2m;
      let tempUnits = data.current_units.temperature_2m;

      let uv = Math.floor(data.daily.uv_index_max[0]);
      let burnRisk = '';

      if(uv < 3) {
        burnRisk = 'low';
      } else if(uv > 3 && uv < 6) {
        burnRisk = 'moderate';
      } else if(uv > 6 && uv < 9) {
        burnRisk = 'high';
      } else {
        burnRisk = 'extreme';
      }
      
      console.log(`${temp}${tempUnits}, UV Index Max: ${uv} (${burnRisk})`);

      let percipitationPredictionToday = data.daily.precipitation_probability_max[0];
      let percipit = data.current.preciptiation;
      let isLikelyPercipit = false;
      let pressure = data.current.pressure_msl;

      if(percipit === 1) {
        isLikelyPercipit = true;
      }

      let currentHour = new Date().getHours();

      let percipitationPredictionHourly = data.hourly.precipitation_probability[currentHour];
      let relativeHumidity = data.hourly.relative_humidity_2m[currentHour];
      let clouds = data.hourly.cloud_cover[currentHour];
      let viz = data.hourly.visibility[currentHour];
      
      console.log(`Currently Raining: ${isLikelyPercipit}`)

      const cardinalDirections = [
        "N", "NNE", "NE",
        "ENE", "E", "ESE",
        "SE", "SSE", "S",
        "SSW", "SW", "WSW",
        "WNW", "NW", "NNW"];
      
      let windDegrees = data.current.wind_direction_10m;
      let windSpeed = data.current.wind_speed_10m;
      let windGusts = data.current.wind_gusts_10m;

      let speedUnits = data.current_units.wind_speed_10m;
      let windDirection = cardinalDirections[Math.floor(windDegrees / 22.5)];

      console.log(`${windDirection} at ${windSpeed} ${speedUnits} gusting at ${windGusts} ${speedUnits}`);

      let daylight = Math.floor(data.daily.daylight_duration[0] / 60 / 60);
      let sunrise = new Date(data.daily.sunrise[0]).toLocaleString("en-US", {hour: '2-digit', minute: '2-digit'});
      let sunset = new Date(data.daily.sunset[0]).toLocaleString("en-US", {hour: '2-digit', minute: '2-digit'});
        
      console.log(`Sunrise: ${sunrise}, Sunset: ${sunset}, Daylight: ${daylight} hours`);
    })
