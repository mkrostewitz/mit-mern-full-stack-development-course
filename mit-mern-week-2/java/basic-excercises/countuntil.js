// Counting Up Exercise with Interval

function countUntil(count,interval){
    var i = 0
    var count = count;
    var int = interval;

    function countup() {
        do {
        i++;
        console.log("counter: " + i);
        } while (i < count)
    }
    
    setInterval (countup,int)

}

