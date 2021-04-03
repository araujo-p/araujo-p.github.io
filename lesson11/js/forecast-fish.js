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