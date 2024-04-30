const removeFromArray = function(arr, ...values) {
    for (const value of values) {
        arr = arr.filter(item => item !== value);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
