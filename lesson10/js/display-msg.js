/* Defining Table
 * Input: current day, month and year from user's computer clock
 * Processing: Check if it's Friday
 * Output: Display the massage to the user
 */

var message;
 //Get information from user's computer clock
 var now = new Date();
 var dayOfWeek = now.getDay();

 //Evaluate the days and display message
 if (dayOfWeek == 5) {
    message = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion."
}

//Display message to the user
document.getElementById("friday-mgs").textContent = message;
document.getElementById("friday-mgs").style.display = "block";
