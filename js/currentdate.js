//Current date
document.getElementById('currentDateTime').textContent = new Date().toLocaleDateString('en-US');

//Current year
var y = new Date();
document.getElementById('currentyear').textContent = y.getFullYear();

//Last updated information
var update = document.lastModified;
document.getElementById('currentDateTime').innerHTML = update;