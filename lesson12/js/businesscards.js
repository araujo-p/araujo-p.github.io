const requestURL = 'https://araujo-p.github.io/jsonfiles/localbusiness.json';
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    for (let i = 0; i < 4; i++ ) {
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
    
        h2.textContent = businesses[i].name;
    
        document.querySelector('div.business').appendChild(h2);

        p.textContent = businesses[i].address;

        document.querySelector('div.business').appendChild(p);

        p2.textContent = businesses[i].phone;

        document.querySelector('div.business').appendChild(p2);

        p3.textContent = businesses[i].socialmedia;

        document.querySelector('div.business').appendChild(p3);

        p3.textContent = businesses[i].socialmedia;

        document.querySelector('div.business').appendChild(p3);

        p4.textContent = businesses[i].email;

        document.querySelector('div.business').appendChild(p4);

        p5.textContent = businesses[i].businessour;

        document.querySelector('div.business').appendChild(p5);


    }
});