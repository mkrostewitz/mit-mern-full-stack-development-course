// Moving Ball Exercise
function movingBall (velocity,interval) {

    var velocity;
    var interval;
    var x = 0;
    var ball = document.getElementById('ball');
    
    setInterval (
      function move() {
    
        x = x + velocity;
        ball.style.left = x + 'px';
    
    
      console.log("position (x): " + x)
    
    }
    
    , interval )
    }

//Ping Pong Exercise
function PingPong(velocity,interval) {

    //Global Variables
    var velocity;
    var interval;
    var ball = document.getElementById('ball');
    var start_point = parseInt(document.getElementById('ball').style.left, 10);
    var end_point = window.innerWidth - parseInt(document.getElementById('ball').style.right, 10) - start_point;
    var move_right = true
    let x = start_point;


    //method to move the ball horizontally
    function move_horizontal () {
        if(move_right){
            x += velocity;
        }else{
            x -= velocity;;
        }
        
        ball.style.left = x + 'px';
        
        if(x >= end_point ){
            move_right=false;
        }
        if(x <= start_point ){
            move_right=true;
        }
    }

    //method to handle start/stop of jumping ball
    var timer = setInterval(function () { move_horizontal(); },interval);

    
}

PingPong(1,1)