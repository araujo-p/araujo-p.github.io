//This is the SODA SPRINGS PAGE
const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=676dd2ce754ac598cfd434f6d73cc2d3&units=imperial';
fetch(apiURL2)
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