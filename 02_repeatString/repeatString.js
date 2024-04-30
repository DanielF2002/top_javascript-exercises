const repeatString = function(word, times) {
    if (times < 0) {
        return "ERROR";
    }
    let res = "";
    for (i = 0; i < times; i++) {
        res += word;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
