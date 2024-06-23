const url = 'https://api.open-meteo.com/v1/forecast?latitude=37.24568&longitude=-76.78029&current=temperature_2m,is_day,precipitation,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,pressure_msl,surface_pressure,cloud_cover,visibility&daily=sunrise,sunset,daylight_duration,uv_index_max,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York';

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    
  })
