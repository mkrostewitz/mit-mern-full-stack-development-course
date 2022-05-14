// Step 1: use slice to find elements in an array
function sliceElements(givenArray) {
  let length = givenArray.length;
  let result = givenArray.slice(length -  3,length);
  return result
  //TODO: return last 3 elements of givenArray
}

// Step 2: use splice to find elements in an array
function spliceElements(givenArray, element1, element2) {
  let length = givenArray.length;
  givenArray.splice(length - 1, 1, element1, element2);
  return givenArray
  //TODO: remove the last element of givenArray and add element1 and element2 at that position
}

// Step 3: use splice to find elements in an array
function splitElements(givenString) {
  let result = '[]';
  result = givenString.split(' ');
  return result
  //TODO: convert givenString into an array of words
}

//Uncomment these line to see results for step 1
console.log(sliceElements([1, 2, "MIT Certificate", 4, 5])); 
// should return ["MIT Certificate", 4, 5]

console.log(sliceElements([1, 2, [3, 4], "JavaScript"])); 
// should return [2, [3, 4], "JavaScript"]

//Uncomment these line to see results for Step 2
var arr = [1, 2, "MIT Certificate", 4, 5];
console.log(spliceElements(arr, "JavaScript", 101)); 
// should return [1, 2, "MIT Certificate", 4, "JavaScript", 101]

//Uncomment these line to see results for Step 3
var str = "MIT Certificate loves JavaScript";
console.log(splitElements(str)); 
// should return ["MIT", "Certificate", "loves", "JavaScript"]

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { sliceElements, spliceElements, splitElements };
}
