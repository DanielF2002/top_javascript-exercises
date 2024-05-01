const palindromes_solution2 = function (str) {
    str = str.toLowerCase();
    let start = 0;
    let last = str.length - 1;
    while (last > start) {
        if (!isAlphabetAndNumber(str[start])) {
            start++;
            continue;
        }
        if (!isAlphabetAndNumber(str[last])) {
            last--;
            continue;
        }
        if (str[start] === str[last]) {
            start++;
            last--;
            continue;
        }
        return false;
    }
    return true;
};

const palindromes = (str) => {
    const strArr = str.split("");
    const cleanArr = strArr
        .map(char => char.toLowerCase())
        .filter(char => isAlphabetAndNumber(char));
    const cleanedStr = cleanArr.join("");
    const reversedStr = cleanArr.reverse().join("");
    return cleanedStr == reversedStr;
}

const isAlphabetAndNumber = char => {
    return /^[a-z0-9]$/.test(char);
}

// Do not edit below this line
module.exports = palindromes;
