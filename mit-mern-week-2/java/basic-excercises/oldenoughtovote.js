/*
Instructions

Create a conditional that checks if you're old enough to vote.
- isOldEnoughToVote(age)
- response will store true or false values

*/
let response;

// Add your code here
function isOldEnoughToVote(age) {
    
    var age = 16
    
    if (age >= 18) {
        response = true
    }
    else{
        response = false
    }

  return response;
}
//open the browser console to check results
console.log('results: ', isOldEnoughToVote(response));