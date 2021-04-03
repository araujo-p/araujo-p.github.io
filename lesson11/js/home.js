const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    //console.table(jsonObject); //temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let infographic = document.createElement('section');
        let towndata = document.createElement('article');
        let divbox = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let image = document.createElement('img');

        if((towns[i].name === 'Soda Springs') || (towns[i].name === 'Fish Haven') || (towns[i].name === 'Preston')){

        h2.textContent = towns[i].name;
    
        infographic.appendChild(h2);

        document.querySelector('div.infographic').appendChild(infographic);

        p.textContent = towns[i].motto;

        p.setAttribute('class', 'motto');

        infographic.appendChild(p);
        
        document.querySelector('div.infographic').appendChild(infographic);

        image.setAttribute('src', 'images/' + towns[i].photo);

        image.setAttribute('alt', towns[i].name + ' city');

        towndata.appendChild(image);

        infographic.appendChild(towndata);

        p2.textContent = 'Year Founded: ' + towns[i].yearFounded;

        divbox.appendChild(p2);

        towndata.appendChild(divbox);

        p3.textContent = 'Population: ' + towns[i].currentPopulation;

        divbox.appendChild(p3);

        towndata.appendChild(divbox);

        p4.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;

        divbox.appendChild(p4);

        towndata.appendChild(divbox);
    }
    }
});
