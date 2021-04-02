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
    //13 is the code for Enter key
    if (event.keyCode === 13) {
        console.log("Το κουμπί ENTER πατήθηκε");
        var val = newItem.value;
        console.log(val);

        //To add an entry to the todo list 
        var tmpNode=document.createElement("li");
        var textnode=document.createTextNode(val);
        tmpNode.appendChild(textnode);
        toDoList.appendChild(tmpNode);
        
        //Item added, reset text field
        newItem.value=""  


    }

  });

  //Strikethrough
  var click_count= 0;
  //Keep above variable to check how many times the item has been clicked
  toDoList.onclick = function(event) {
      click_count++;
      console.log(click_count)
      var target = event.target;
      
      if (click_count % 2==1)
      {
        //On odd clicks strikethrough
        console.log("odd")
        //On odd click add  completed ccs style. li style will be overriden
        target.classList.add("completed")
        //Previous implementation with setProperty
     //   target.style.setProperty("text-decoration", "line-through");
      }
      else
      {
        //On even clicks normal
        console.log("even")
        //On evenclick remove  completed ccs style. li style will be used
        target.classList.remove("completed")
        //Previous implementation with setProperty
        //  target.style.setProperty("text-decoration", "none");
      }
     
    };



  //Double click
  toDoList.ondblclick = function(event) {
   
      console.log("Double Click. Should delete")
      var target = event.target;
      toDoList.removeChild(target)
  };