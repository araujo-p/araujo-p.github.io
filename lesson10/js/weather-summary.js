const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=676dd2ce754ac598cfd434f6d73cc2d3&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
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

    //const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    //const desc = jsObject.weather[0].description;
    //document.getElementById('imagesrc').textContent = imagesrc;
    //document.getElementById('icon').setAttribute('src', imagesrc);
    //document.getElementById('icon').setAttribute('alt', desc);
});
