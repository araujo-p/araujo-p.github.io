conquest requestURL = 'byui-cit230.io/canvas-referenced/latter-day-prophets.josn';
fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jasonObject); //temporary checking for valid response and data parsing
});