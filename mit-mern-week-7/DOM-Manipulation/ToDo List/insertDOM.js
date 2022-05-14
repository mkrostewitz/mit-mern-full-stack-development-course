function addItem() {
  // TODO: add 'item' to the list of TODOs

  //Step 1: identify the value of the myInput element. 
  var ToDo = document.getElementById('myInput').value;

  if (ToDo === '' || ToDo === null) {
    return false;
  } else {
    //Step 2: Create a text node containing that value
    //Step 3: Create a new li element and append the text node to it
    var li = document. createElement("li");
    li. appendChild(document. createTextNode(ToDo));


    //Step 4: Append the li element to the existing myTODOs element.
    ul = document.getElementById('myTODOs');
    ul.appendChild(li);



    //document.body.appendChild(textNode);

  };
 
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = addItem;
}
