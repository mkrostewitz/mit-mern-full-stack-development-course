// permute a static string 
function permute(Input) {
  let len = Input.length;
  if (len === 1) {
    return Input;
  }
  let pick = "";
  let permutations = [];
  for (let i = 0; i < len; i++) {
    pick = Input[i];
    var remainder = Input.slice(0, i) + Input.slice(i + 1, len);
    for (var perm of permute(remainder)) {
      permutations.push(pick + perm);
    }
  }
  return permutations;
}
// const Input = "abc";
// console.log(JSON.stringify(permute(Input)));

// permute a dynamic string (user interface)

const A = "abcd";
const permutations = permute(A);

const mlen = 3; // matrix length
let icount = 0;
const permuations = [];
const tagArray = [];
let tag = document.getElementsByClassName("box");
let len = tag.length;
for (let i = 0; i < len; i++) {
  tagArray[i] = tag.item(i); // get a handle on divs
  console.log(tag.item(i).innerText);
}

function setTags(permutation) {
  if(permutations.length === 0 ) return alert('No more permuations to display!');

  //Transfer value into permuations  
  permuations.push( permutations[0] );
  permutations.splice(0,1);

  //get handle on last entry
  let l = permuations.length - 1;
  let data = permuations[l];

  // Data Entry Field Counter
  let field_counter = 1;

  for (let i = 0; i <= data.length ; i++) {
    document.getElementById('box-' + field_counter).textContent = data[i];
    field_counter++;    
  }
  
  //
  // enter code here
  //
}
function step() {
  setTags(permutations[icount++]);
}
