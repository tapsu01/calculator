const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((item, sum) => sum + item, 0);
};

const multiply = function (arr) {
  if (!!!arr.length) {
    return 0;
  }

  return arr.reduce((item, result) => result * item, 1);
};

const devide = function (a, b) {
  return a / b;
};

const power = function (a, b) {
  let result = a;

  for (let i = 1; i < b; i++) {
    result = result * a;
  }

  return result;
};

const factorial = function (a) {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result = result * i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  devide,
  power,
  factorial,
};
