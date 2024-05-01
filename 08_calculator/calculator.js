const add = function(n1, n2) {
  return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
	return arr.reduce( (res, n) => res + n, 0 );
};

const multiply = function(arr) {
  return arr.reduce( (res, n) => res * n, 1 );
};

const power = function(n1, n2) {
	return Math.pow(n1, n2);
};

const factorial = function(n) {
	if (n < 1) {
    return 1;
  }
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
