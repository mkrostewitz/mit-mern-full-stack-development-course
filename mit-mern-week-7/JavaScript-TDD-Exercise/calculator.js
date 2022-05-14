const calculate = (mode, numbers) => {
    var mode;
    let total = numbers[0];

    numbers.slice(1).forEach(numbers => {
        if(mode === '+') { 
            total += numbers;
        } else if(mode === '-') {
            total -= numbers;
        } else if(mode === '/') {
        total /= numbers;    
        }
        else if(mode === '*') {
        total *= numbers;    
        }
    });
    return total;
}

module.exports = calculate;
