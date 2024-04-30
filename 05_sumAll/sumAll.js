const sumAll = function(n1, n2) {
    if (!Number.isInteger(n1) || !Number.isInteger(n2) || n1 < 0 || n2 < 0) {
        return "ERROR";
    }
    let minInt, maxInt;
    if (n1 >= n2) {
        minInt = n2;
        maxInt = n1;
    } else {
        minInt = n1;
        maxInt = n2;
    }
    let sums = 0;
    for (let i = minInt; i <= maxInt; i++) {
        sums += i;
    }
    return sums;
};

// Do not edit below this line
module.exports = sumAll;
