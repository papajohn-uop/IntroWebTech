//btnClear points to the #clear-button element in the DOM
const btnClear = document.querySelector('#clear-button');

//textLine points to the #new-item element in the DOM
const newItem = document.querySelector('#new-item');

//toDoList points to the #todo-list element in the DOM
const toDoList=document.querySelector('#todo-list');

//Adding and event listener: btnClear will react on the click event
//When the btnClear is clicked, then the callback fuction 
//(the 2nd argument of the event listener) will be called. 
btnClear.addEventListener("click", function() {
    console.log("Το κουμπί πατήθηκε");
    // Remove all elements of list
    while( toDoList.firstChild ){
        toDoList.removeChild( toDoList.firstChild );
      }

      //clear the text field input just in case
    newItem.value=""  
});

//Adding an event listener:  for text input to react on enter 
newItem.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        console.log("Το κουμπί ENTER πατήθηκε");
        var val = newItem.value;
        console.log(val);

        //To add an entry to the todo list 
        var tmpNode=document.createElement("li");
        var textnode=document.createTextNode(val);
        tmpNode.appendChild(textnode);
        toDoList.appendChild(tmpNode);

        //Iem added reset text field
        newItem.value=""  


    }

  });

  //Strikethrough
  
  toDoList.onclick = function(event) {
      var target = event.target;
      target.style.setProperty("text-decoration", "line-through");
      log.console(target.style.)
    };