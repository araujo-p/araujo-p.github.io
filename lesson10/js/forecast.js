const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=676dd2ce754ac598cfd434f6d73cc2d3&units=imperial';
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


    //loop through it
    for (let i = 0; i < jsObject.list.length-1; i++ ){
        if(jsObject.list[i].dt_txt.includes('18:00:00')){
        let d = new Date(jsObject.list[i].dt_txt);
        day++
        document.getElementById(`day${day}`).textContent = dayofWeek[d.getDay()];
        document.getElementById(`temp${day}`).textContent = jsObject.list[i].main.temp + ' F';
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        const desc = jsObject.list[i].weather[0].description;
        document.getElementById(`icon${day}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day}`).setAttribute('alt', desc);

        }
    }
});