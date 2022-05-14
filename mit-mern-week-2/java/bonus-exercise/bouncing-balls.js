// get the canvas element
const canvas = document.querySelector('canvas')

// get the width and height of the browser
const width = window.innerWidth;
const height = window.innerHeight;


//Define Edges
var left_edge = 0;
var right_edge = width;
var top_edge = 0;
var bottom_edge = height;

// set width and height of canvas to browser viewport
canvas.width = width;
canvas.height = height;

// call getcontect method to draw the ball
const ctx = canvas.getContext('2d')

//create random number generator function
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min +1)) + min;
    return num
}


// ball class
class Ball{
    constructor(x, y , velx, vely, size, color) {
        this.x = x; // horizontal position of the ball
        this.y = y; // vertical position of the ball
        this.velx = velx; // velocity x added to the horizontal
        this.vely = vely; // velocity y added to the vertical coordinate
        this.size = size; // size of the ball
        this.color = 'rgb(168, 201 ,87)' ; //fill ball shape with random color
    }

    //create ball
    createBall() {
        ctx.beginPath(); // start the drawing
        ctx.fillStyle = this.color; // fill the ball with given color

        // x and y is the position of the ball
        //size is the radius of the ball
        //0 the start point of degree around the ball
        // 2 * Math.PI is an end point which is equivalent to 360 degrees
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI );
        ctx.fill(); //finish drawing the ball

    }

    //move function
    moveBall() {
        // if x and y are greater or less than browser (determined by viewport function, thenchange direction)
        if(this.x + this.size >= right_edge ){
            // this.velx = -this.velx;
            this.velx = -random(1,10);
            this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) +  ',' + random(0, 255) +')';
        }

        if(this.x - this.size <= left_edge) {
            this.velx = random(1,10);
            this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) +  ',' + random(0, 255) +')';
        }

        if(this.y + this.size >= bottom_edge) {
            this.vely = -random(1,10);
            // Ball.backgroundColor = randomColor; 
            this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) +  ',' + random(0, 255) +')';
            }
        if(this.y - this.size <= top_edge){
            this.vely = random(1,10);
            this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) +  ',' + random(0, 255) +')';
        }

        //add velocity to x & y coordinate
        this.x += this.velx;
        this.y += this.vely;
    }
}

// create more balls and store them in an array
const balls = [];

while(balls.length < 25) {

    let size = random(10,20);

    //create  a new instance of a a ball
    const ball = new Ball (
        random(size, width - size), 
        random(size, height - size), 
        random (-5, 5), 
        random (-5, 5), 
        size, 
        'rgb(168,201,87)'
    );

    balls.push(ball);

}

//loop function
function loop(){

    //cover frames before new ball is created
    ctx.fillStyle = 'rgba(38, 38, 38, 0.5)'
    ctx.fillRect( 0, 0, width, height);
    

    //create a new ball and move it
    for(let i = 0; i < balls.length; i++){
        balls[i].createBall();
        balls[i].moveBall();
    
    }

    //call loop fiunction over and oper again
    requestAnimationFrame(loop)
    
}

//call loop
loop()
