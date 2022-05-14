const funcs = {
  person: function () {
    let person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
      return `<h1> ${greeting()} ${person} </h1>`
    }
  },
};

const greeting = function () {
  let today = new Date();
  let time = today.getHours();
  let result;
  if ( time <= 10 ) {
    result = "Good Morning"
    } else if ( time <= 18 ) {
    result = "Good Afternoon"
    } else { 
    result = "Good Evening"
    }
  return result;
};

const sentence = funcs.person()

export {
  funcs,
  greeting,
  sentence,
};