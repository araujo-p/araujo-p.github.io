const requestURL1 = 'https://araujo-p.github.io/jsonfiles/localbusiness.json';
fetch(requestURL1)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    for (let i = 0; i < 8; i++ ) {
        let businesscard = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
    
        h2.textContent = businesses[i].name;

        businesscard.appendChild(h2);
    
        document.querySelector('div.business-cards').appendChild(businesscard);

        p.textContent = businesses[i].address;

        businesscard.appendChild(p);

        document.querySelector('div.business-cards').appendChild(businesscard);

        p2.textContent = businesses[i].phone;

        businesscard.appendChild(p2);

        document.querySelector('div.business-cards').appendChild(businesscard);

        p3.textContent = businesses[i].socialmedia;

        businesscard.appendChild(p3);

        document.querySelector('div.business-cards').appendChild(businesscard);

        p4.textContent = businesses[i].email;

        businesscard.appendChild(p4);

        document.querySelector('div.business-cards').appendChild(businesscard);

        p5.textContent = businesses[i].businessour;

        businesscard.appendChild(p5);

        document.querySelector('div.business-cards').appendChild(businesscard);


    }
});