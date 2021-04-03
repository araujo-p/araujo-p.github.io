//This is the PRESTON PAGE
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=676dd2ce754ac598cfd434f6d73cc2d3&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].description + ' ' + jsObject.main.temp;
    document.getElementById('temperature').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed;

    let windSpeed = jsObject.wind.speed;
    let temperature = jsObject.main.temp;
    
  //"Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind 
  //speeds above 4.8 kilometers per hour (3.0 mph).
    if ((temperature <= 50) && (windSpeed >= 3)){
      var wChill = 35.74 + (.6215 * temperature) - (35.75 *(Math.pow(windSpeed,.16))) + (.4275 *(temperature)*(Math.pow(windSpeed,.16)))
      return document.getElementById('windchill').textContent = Math.round(wChill*100)/100 + '°F';
      }
      else{
          var msg= "No wind chill !";
          return document.getElementById('windchill').textContent = msg;
      }
});

//This is the SODA SPRINGS
const apiURL5 = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=676dd2ce754ac598cfd434f6d73cc2d3&units=imperial';
fetch(apiURL5)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('currently-s').textContent = jsObject.weather[0].description + ' ' + jsObject.main.temp;
    document.getElementById('temperature-s').textContent = jsObject.main.temp_max;
    document.getElementById('humidity-s').textContent = jsObject.main.humidity;
    document.getElementById('windspeed-s').textContent = jsObject.wind.speed;

    let windSpeed = jsObject.wind.speed;
    let temperature = jsObject.main.temp;
    
  //"Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind 
  //speeds above 4.8 kilometers per hour (3.0 mph).
    if ((temperature <= 50) && (windSpeed >= 3)){
      var wChill = 35.74 + (.6215 * temperature) - (35.75 *(Math.pow(windSpeed,.16))) + (.4275 *(temperature)*(Math.pow(windSpeed,.16)))
      return document.getElementById('windchill-s').textContent = Math.round(wChill*100)/100 + '°F';
      }
      else{
          var msg= "No wind chill !";
          return document.getElementById('windchill-s').textContent = msg;
      }
});

////This is the FISH HAVEN
const apiURL6 = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=676dd2ce754ac598cfd434f6d73cc2d3&units=imperial';
fetch(apiURL6)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('currently-f').textContent = jsObject.weather[0].description + ' ' + jsObject.main.temp;
    document.getElementById('temperature-f').textContent = jsObject.main.temp_max;
    document.getElementById('humidity-f').textContent = jsObject.main.humidity;
    document.getElementById('windspeed-f').textContent = jsObject.wind.speed;

    let windSpeed = jsObject.wind.speed;
    let temperature = jsObject.main.temp;
    
  //"Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind 
  //speeds above 4.8 kilometers per hour (3.0 mph).
    if ((temperature <= 50) && (windSpeed >= 3)){
      var wChill = 35.74 + (.6215 * temperature) - (35.75 *(Math.pow(windSpeed,.16))) + (.4275 *(temperature)*(Math.pow(windSpeed,.16)))
      return document.getElementById('windchill-f').textContent = Math.round(wChill*100)/100 + '°F';
      }
      else{
          var msg= "No wind chill !";
          return document.getElementById('windchill-f').textContent = msg;
      }
});
