// Στο εξωτερικό αρχείο vouna.js περιέχεται ένας πίνακας πινάκων δύο στοιχείων,
// το πρώτο από τα οποία είναι μια περιγραφή ενός προορισμού σε Ελλληνικό βουνό
// και το δεύτερο ένα σχετικό URL μιας φωτογραφίας αντίστοιχα στον φάκελο ./img.

// File vouna.js contains an array with 2 elements. The 1st is a description of
// a destination in a Greek mountain. The 2nd element is the URL of a photo of
// the destination.

const thumbs = document.querySelectorAll(".mikrografies img");

// Όταν φορτώνει η εφαρμογή, η επιλεγμένη μικρογραφία είναι η 1η στον πίνακα 
// thumbs.
// Κάθε μικρογραφία μπορεί να κλικαριστεί. Όταν γίνεται αυτό θα εκτελείται 
// η συνάρτηση imgActivate()
// Η συνάρτηση, που καλείται όταν γίνει κλικ σε μια από τις εικόνες του πίνακα
// thumbs, έχει σαν όρισμα ένα event object. Η συνάρτηση:
// - εμφανίζει στην περιοχή panel-main τη μικρογραφία που μόλις πατήθηκε
// - φροντίζει ώστε μόνο η μικρογραφία που μόλις πατήθηκε να έχει διαφάνεια 50%

// When the app loads, the selected thumbnail is the first one in the array
// thumbs.
// Each thumbnail can be clicked. If clicked, the function imgActivate() is 
// called which :
// - displays the just clicked image in the area panel-main 
// - makes sure that only the just clicked thumbnail has opacity 50%. 

//KEep the shuffled images
var shuffled

//this gets ALL the divs with this class
var mikrografies_panel = document.getElementsByClassName("mikrografies");
var main_panel = document.getElementsByClassName("panel-main");
var perigrafi_panel = document.getElementsByClassName("perigrafi");




//Keep the previosly clikced image
var prev_target
function imgActivate(e) {
  if (typeof prev_target == 'undefined')// if we have already done this once
  {
    prev_target=e.target
  }  

  //deopaque previous image
  prev_target.classList.remove("activeThumb")    
  //opaque current
  e.target.classList.add("activeThumb")    
    //now add the clicked image to main panel  
  //bit og a hack. in this case the image is the lastchid of div so we use that directly
  new_src=e.target.getAttribute('src')
  main_panel[0].lastChild.src=new_src
  //lets update description as well
  perigrafi_panel[0].textContent="PAPA"
  for (var i=0, len=shuffled.length, img; i<len; i++) {
    img = shuffled[i][1];
    //If img matches select new description
    if (img==new_src)
    {
      perigrafi_panel[0].textContent=shuffled[i][0]
      main_panel[0].lastChild.title=shuffled[i][0]
    }
  }

  prev_target=e.target 

}

// Επιστρέφει τον πίνακα arr με τυχαία διάταξη στοιχείων
// Returns a shuffled copy of array arr
//shuffle array https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}


//rn onl load


function runOnLoad(e) {
  console.log("Papajohn")
  shuffled=shuffleArray(vouna)
    for (let i = 0; i<shuffled.length - 1;  i++) {
    var img_elem = document.createElement("img");
    src=shuffled[i][1]
    img_elem.src =src;
    //Just use the only div with class mikrografies which is the first entry (index 0) o
    mikrografies_panel[0].appendChild(img_elem);
  }

  //shwow first image on main panel
  var first_img_elem = document.createElement("img");
  src=shuffled[0][1]
  first_img_elem.src =src;
  first_img_elem.title =shuffled[0][0];
  //Just use the only div with class mikrografies which is the first entry (index 0) o
  main_panel[0].appendChild(first_img_elem);
  main_panel[0].lastChild.title=shuffled[0][0]
  //shwow first image description on descritpion panel
  desc=shuffled[0][0]
  var first_img_desc = document.createTextNode(desc);
  
  //Just use the only div with class mikrografies which is the first entry (index 0) o
  perigrafi_panel[0].appendChild(first_img_desc);

  var images = document.getElementsByTagName("img");

  for (var i=0, len=images.length, img; i<len; i++) {
    img = images[i];
    img.addEventListener("click", imgActivate );
    img.title=shuffled[i][0] // add title attribute as tooltip
  }



}


function reset_opaque()
{
  //check if something has been clicked
  //and if yes deaopaque it
  var x = document.getElementsByClassName("activeThumb");
  if(x.length>0)
    x[0].classList.remove("activeThumb")  
}

//get a new src and change phot in  main panel, description and hover tooltip
function update_photo(new_src)
{
  main_panel[0].lastChild.src=new_src
  //lets update description as well
  perigrafi_panel[0].textContent="PAPA"
  for (var i=0, len=shuffled.length, img; i<len; i++) 
  {
    img = shuffled[i][1];
    //If img matches select new description
    if (img==new_src)
    {
      perigrafi_panel[0].textContent=shuffled[i][0]
      main_panel[0].lastChild.title=shuffled[i][0]
    }
  }
}

function new_photo_fuction(e) {
  reset_opaque()
  //Get all children of mirkografeis panel
  var mikrografies = mikrografies_panel[0].children;
  let randomIndex = Math.floor(Math.random() * mikrografies_panel[0].childElementCount);
  //Tranfomr htmlcollection to array( https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array )
  var arr = Array.prototype.slice.call( mikrografies )

  //just like in activate
  //bit og a hack. in this case the image is the lastchid of div so we use that directly
  new_src=arr[randomIndex].getAttribute("src")

  update_photo(new_src)

}




function prev_photo_fuction(e) {
  reset_opaque()
  var index 
  for (var i=0, len=shuffled.length, img; i<len; i++) 
  {
    if  (shuffled[i][1]==main_panel[0].lastChild.getAttribute("src"))
      index=i
  }
  if (index==0)
  {
    index=shuffled.length-1
  }
  else 
  index=index-1
  //just like in activate

  new_src=shuffled[index][1]
  update_photo(new_src)

}

function next_photo_fuction(e) {
  reset_opaque()
  var index 
  for (var i=0, len=shuffled.length, img; i<len; i++) 
  {
    if  (shuffled[i][1]==main_panel[0].lastChild.getAttribute("src"))
        index=i
  }
  if (index==shuffled.length-1)
      index=0
  else 
    index=index+1
  //just like in activate
  new_src=shuffled[index][1]
  update_photo(new_src)

}