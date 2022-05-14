function isUpperCase(str) {
    return str === str.toUpperCase();
}

function isLowerCase(str) {
    if (str.toLowerCase() === str) {
        return true;
    }
    return false;
}

function greet(name) {
    let greeting;

    if(name === undefined || name.length === 0 ) {
        return "Hello there!";
    }

    let ListOfNames = '';
    let WritingCase = '';
    let array = [];
    let ArrayLength = typeof name === 'object' ? name.length : 1;

    //Prepare Array
    if ( typeof name === 'object' ) {
        array = name;
    } else {
        array.push(name)
    }

    for (let i = 0; i < ArrayLength; i++) {
        let element = array[i].split('');
            element = element.slice(1); 

        for (let a = 0; a < element.length; a++) {
            if (isLowerCase(element[a])) {
                WritingCase = 'lower'; 
            } 
                
            if (isUpperCase(element[a])) {
                WritingCase = 'upper'; 
            }
        }  
        ListOfNames += ', ' + array[i];
    }

        if ( WritingCase === 'lower') {
            greeting = 'Hello' + ListOfNames;
        } 
        if ( WritingCase === 'upper' ) {
            greeting = 'HELLO' + ListOfNames + '!';
        }

        return greeting;
    //}
    
    return greeting;
}

module.exports = greet;