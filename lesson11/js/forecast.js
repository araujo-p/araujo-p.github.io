//This the PRESTON PAGE
const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=676dd2ce754ac598cfd434f6d73cc2d3&units=imperial';
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
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

//This is the FISH HAVEN PAGE
const apiURL3 = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=676dd2ce754ac598cfd434f6d73cc2d3&units=imperial';
fetch(apiURL3)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    let dayfish = 0;
    const dayofWeekfish = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


    //loop through it
    for (let i = 0; i < jsObject.list.length-1; i++ ){
        if(jsObject.list[i].dt_txt.includes('18:00:00')){
        let dfish = new Date(jsObject.list[i].dt_txt);
        dayfish++
        document.getElementById(`day-${dayfish}`).textContent = dayofWeekfish[dfish.getDay()];
        document.getElementById(`temp-${dayfish}`).textContent = jsObject.list[i].main.temp + ' F';
        const imageSRC = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        const descFish = jsObject.list[i].weather[0].description;
        document.getElementById(`icon-${dayfish}`).setAttribute('src', imageSRC);
        document.getElementById(`icon-${dayfish}`).setAttribute('alt', descFish);

        }
    }
});

//This is the SODA SPRINGS PAGE
const apiURL4 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=676dd2ce754ac598cfd434f6d73cc2d3&units=imperial';
fetch(apiURL4)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    let daysoda = 0;
    const dayofWeeksoda = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


    //loop through it
    for (let i = 0; i < jsObject.list.length-1; i++ ){
        if(jsObject.list[i].dt_txt.includes('18:00:00')){
        let dsoda = new Date(jsObject.list[i].dt_txt);
        daysoda++
        document.getElementById(`day_${daysoda}`).textContent = dayofWeeksoda[dsoda.getDay()];
        document.getElementById(`temp_${daysoda}`).textContent = jsObject.list[i].main.temp + ' F';
        const imageSRC1 = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
        const descSoda = jsObject.list[i].weather[0].description;
        document.getElementById(`icon_${daysoda}`).setAttribute('src', imageSRC1);
        document.getElementById(`icon_${daysoda}`).setAttribute('alt', descSoda);

        }
    }
});