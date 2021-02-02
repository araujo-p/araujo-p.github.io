//Function toggleMenu for smaller views
function toggleMenu() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}

//Footer current date
document.getElementById('footerdate').textContent = new Date().toLocaleDateString('en-US');