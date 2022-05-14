//this function compares the variable type of a, b & c

var a;
var b;
var c;
var type;

function isString( a, b, c, type ) {
    let type_a = typeof(a);
    let type_b = typeof(b);
    let type_c = typeof(c);

    if( 
        type_a === type && 
        type_b === type && 
        type_c === type ) { 
        return message = 'Data is consistent with a = ' + type_a + ' b = ' + type_b + ' c = ' + type_c ; 
        }
    else { 
        return message = 'Data is (in)consistent with a = ' + type_a + ' b = ' + type_b + ' c = ' + type_c ; 
  }
}

isString(a,b,c)

console.log('isString results: ', isString(a,b,c));