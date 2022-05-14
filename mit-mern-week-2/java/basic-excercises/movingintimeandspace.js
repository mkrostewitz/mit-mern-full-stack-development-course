//This Functions is changing the position of a fiven object by the set parameters:
//- position
//- velocity (incremental units)
//- interval 

function moveInTimeSpace(position,velocity,interval) {

    var position;
    var velocity;
    var interval;

setInterval (
function move() {

    position = position + velocity;
    console.log("position: " + position)

}

, interval )
}
