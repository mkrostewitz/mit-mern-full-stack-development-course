
//Bouncing Exercise
function Bounce (velocity,interval) {

    //Global Variables
    var velocity;
    var interval;
    var ball = document.getElementById('ball');

    var left_point = parseInt(document.getElementById('ball').style.left, 10);
    var right_point = window.innerWidth - parseInt(document.getElementById('ball').style.right, 10) - left_point;

    var top_point = parseInt(document.getElementById('ball').style.top, 10);
    var bottom_point = window.innerHeight - parseInt(document.getElementById('ball').style.bottom, 10) - top_point;

    var move_right = true;
    var move_down = true;

    let x = left_point;
    let y = top_point;

    //method to move the ball horizontally
    function move_horizontal () {
        if(move_right){
            x += 1;
        }else{
            x -= 1;
        }
        
        ball.style.left = x + 'px';
        
        if(x >= right_point  ){
            move_right=false;
        }
        if(x <= left_point ){
            move_right=true;
        }
    }

    //method to move the ball vertically
      function move_vertical () {
        if(move_down){
            y += (velocity + 2);
        }else{
            y -= (velocity + 2);
        }
        
        ball.style.top = y + 'px';
        
        if(y >= bottom_point  ){
            move_down=false;
            //change the color of the ball
            ball.style.backgroundColor = generateRandomColor(); 
            someDiv.style.color = generateRandomColor();
            console.log ("Changed the Color");
        }

        if(y <= top_point ){
            move_down=true;
        }
    }


    //method to handle start/stop of jumping ball
    var timer_a = setInterval(function () { move_horizontal(); },interval);
    var timer_b = setInterval(function () { move_vertical(); },interval);
}

function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}

Bounce(1,1)