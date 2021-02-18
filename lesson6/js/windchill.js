function CalculateWindSpeed(){
var temperature = parseFloat(document.getElementById('temperature').value);
var windSpeed = parseFloat(document.getElementById('windspeed').value);
var windChillFactor = windChill (temperature, windSpeed);
document.getElementById('windchill').innerHTML = windChillFactor.toFixed(2);
}

 //This function will do the calculation for the wind chill and return the result to the function doInputOuput
 function windChill (tempF, speed) {
//"Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) and wind 
//speeds above 4.8 kilometers per hour (3.0 mph).
    if (temperature <= 50 && windSpeed >= 3.0){
    var wChill = 35.74 + (.6215 * tempF) - (35.75 *(Math.pow(speed,.16))) + (.4275 *(tempF)*(Math.pow(speed,.16)))
    return wChill;
    }
    else{
        var msg= "No wind chill"
        return msg;
    }
}
