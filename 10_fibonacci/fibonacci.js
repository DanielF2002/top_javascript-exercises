const fibonacci = function(number) {
    number = parseInt(number);
    if (number < 0) {
        return "OOPS";
    }
    if (number === 0) {
        return 0;
    }
    if (number === 1) {
        return 1;
    }
    let prev2 = 0;
    let prev1 = 1;
    for (let i = 2; i <= number; i++) {
        let curr = prev2 + prev1;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
