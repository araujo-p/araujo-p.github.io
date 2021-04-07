//This the HOME PAGE WEATHER INFORMATION
const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=-18.9113&lon=-48.2622&exclude=minutely,hourly&appid=676dd2ce754ac598cfd434f6d73cc2d3&units=metric';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //This is the Weather Summary

    document.getElementById('temperature').textContent = jsObject.current.temp;
    document.getElementById('description').textContent = jsObject.current.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.current.humidity;
    let day = 0;
    let d = new Date();
    let n = d.getDay();
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    //loop through it
    for (let i = 0; i < 8; i++ ) {
        if(i == n) {
        day++
        n++
        document.getElementById(`day${day}`).textContent = dayofWeek[n];
        document.getElementById(`temp${day}`).textContent = jsObject.daily[i].temp.day + ' °C';
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png';
        const desc = jsObject.daily[i].weather[0].description;
        document.getElementById(`icon${day}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day}`).setAttribute('alt', desc);
        }
    }
});
