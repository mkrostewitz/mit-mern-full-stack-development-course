// Recreating the Painting 
function recreate_painting() {
    var length = data.length;
    var i  = 0;
    var counter = 1;
    

do {
    let ball = data[i];
    
    let x = ball.x;
    let y = ball.y;
    let color = ball.color;

    create(ball.x,ball.y,ball.color);
    console.log(ball.x,ball.y,ball.color);
    console.log('Data of Ball ' + counter , ball.x + ',' + ball.y + ',' + ball.color );

    counter = counter + 1;
    i = i + 1

} while (counter <= length);
}
