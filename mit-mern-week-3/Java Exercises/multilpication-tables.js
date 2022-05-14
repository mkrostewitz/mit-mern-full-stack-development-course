const multiplier = 1;
let line_result = "Output:";

for(let i=1; i<=10; i++){
    let line_result = '\n···' + i * multiplier;

    for(let x = 2 ; x <= 10; x++){
        line_result += '··' + i * x
    }

    console.log(line_result)
}