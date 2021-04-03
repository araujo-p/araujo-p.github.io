const requestURL1 = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL1)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    //console.table(jsonObject); //temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');

        if(towns[i].name === 'Fish Haven'){

        p.textContent = towns[i].events[0];

        document.querySelector('div.events-fish').appendChild(p);

        p2.textContent = towns[i].events[1];

        document.querySelector('div.events-fish').appendChild(p2);

        p3.textContent = towns[i].events[2];

        document.querySelector('div.events-fish').appendChild(p3);

        p4.textContent = towns[i].events[3];

        document.querySelector('div.events-fish').appendChild(p4);

    }
    }
});