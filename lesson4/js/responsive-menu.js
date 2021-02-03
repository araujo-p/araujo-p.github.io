//Function toggleMenu for smaller views
function toggleMenu() {
    console.log(document.getElementById("navbar").classList);
    document.getElementById("navbar").classList.toggle("responsive");
}

//Footer current date
try{
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    document.getElementById('footerdate').textContent = new Date().toLocaleDateString('en-US', options);
}catch (e){
    alert("Error with code or your browser or your browser does not support Locale");
}
