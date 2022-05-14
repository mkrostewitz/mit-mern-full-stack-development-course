let notFound = true;
let counter = 0;

while(notFound) {
    if (counter === 5000){
        notFound = false;
        console.log('found 5000');
    }
    else { 
        console.log('Still looking');
    }
    counter += 1;
}