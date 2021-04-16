//ο χρόνος τώρα σε ms
//current time in ms
let start = new Date().getTime();

//ο συνολικός χρόνος του παίχτη
//the player's total time
let totalTime = 0;

//ο αριθμός των προπαθειών
//number of attempts
let attempts = 0;

//το παιχνίδι τελειώνει μετά από τόσες προσπάθειες 
//max attempts
const maxAttempts = 10;


//The game area div
var game_area_div = document.querySelector("#gameArea")

//εμφάνισε τον πρώτο κύκλο
//show the first circle
appearAfterDelay();


//επιστρέφει ένα τυχαίο χρώμα
//return a random color
function getRandomColor() {
    let color = '#';
    //κάντε τις απαραίτητες αλλαγές ώστε η getRandomColor() να επιστρέφει ένα τυχαίο χρώμα, αντί για το κόκκινο που επιστρέφει τώρα
    //make the appropriate changes such so that it returns a random color
   color = color + Math.floor(Math.random()*16777215).toString(16);
    //  color = color + Math.floor(Math.random()*5000000).toString(16);
   return color;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//Εμφανίζει σε τυχαία θέση έναν κύκλο με τυχαία διάμετρο και χρώμα
//shows a circle in a random position with a random color
function makeShapeAppear() {
    //Αντί για σταθερές τιμές, δώστε στις μεταβλητές top, left, width τυχαίες τιμές (που να έχουν νόημα),
    //ώστε οι κύκλοι να εμφανίζονται σε τυχαία θέση και με τυχαία διάμετρο (ούτε τεράστια, ούτε πάρα πολύ μικρή)
    //και να είναι πάντα μέσα στο πλαίσιο
    //Instead of fixed values, for top, left and width use random values (that are sensible), so that the circles
    //always appear in a random position and with a random size (not huge, not tiny) and always in the frame
    
    //for size we define min =50 max150
    let width = getRandomIntInclusive(50,150);;
    //to make sure everything is inside : we select x,y from the total size minus the circle size
    let top = getRandomIntInclusive(width,game_area_div.clientHeight-width);
    let left = getRandomIntInclusive(width,game_area_div.clientWidth-width);
    
    
    var circle_div = document.createElement("div");
    circle_div.id="shape"
    circle_div.style.position = "absolute";
    circle_div.style.top = top;
    circle_div.style.left = left;
    circle_div.style.height = width;
    circle_div.style.width = width;
    circle_div.style.backgroundColor = getRandomColor();
    circle_div.addEventListener("click", doSmth );
   // console.log(circle_div)
    game_area_div.appendChild(circle_div);

  
    
   // document.querySelector("#shape").style.display = "block";

}

//περιμένει από 0 ως 2 δευτερόλεπτα και εμφανίζει έναν κύκλο
//waits 0 to 2 sec before showing the circle
function appearAfterDelay() {
    //προσθέστε κώδικα ώστε το σχήμα να εμφανίζεται μετά από τυχαίο διάστημα 0-2 δευτερολέπτων
  //  for (var i=0; i<maxAttempts; i++) 
    { 
        rand_Delay=Math.random() * 2000 //to get up to 2000 msecs
       // console.log(rand_Delay)
        setTimeout(makeShapeAppear, rand_Delay);
        //time that the circl has appeared
        start = new Date().getTime();
    }

  //  console.log(game_area_div.clientWidth)
  //  console.log(game_area_div.clientHeight)

}

//όταν ο παίχτης κάνει κλικ σε ένα σχήμα πρέπει να γίνουν μια σειρά από πράγματα...
//when the player clicks the shape ...
document.querySelector("#shape").onclick = function () {
    console.log("DS")

}

//όταν ο παίχτης κάνει κλικ σε ένα σχήμα πρέπει να γίνουν μια σειρά από πράγματα...
//when the player clicks the shape ...
function doSmth(e) {
 //console.log(e)
 //Count Time
 finish = new Date().getTime();
 circle_time=finish-start;
 //Show time for each circle on html page
 document.getElementById('timeTaken').innerHTML = circle_time+'ms'
 //console.log(circle_time)
 //Keep total time
 totalTime+=circle_time
 //Show time for each circle on html page
 document.getElementById('totalTime').innerHTML = totalTime+'ms'
 //Count circles so far
 attempts++
 //console.log(attempts)
 //Disappear
 var myobj = document.getElementById("shape");
 myobj.remove();
 //Show next circle
 if (attempts==10)
 {
  console.log("GAME OVER")
  console.log("TOTAL TIME")
  console.log(totalTime)
  alert('TOTAL TIME--> ' + totalTime);
 }
   else
 appearAfterDelay()
}

  