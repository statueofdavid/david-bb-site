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
      console.log(data);
      
      
    })



