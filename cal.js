const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (callback, a, b) {
  return callback(+a, +b);
};

let a = '';
let b = '';
let o = '';

const clear = function () {
  a = '';
  b = '';
  o = '';
};

const output = document.querySelector('.output');
const displayValue = function () {
  output.value = `${a}${o}${b}`;
};

const equal = function () {
  if (!a || !b || !o) {
    return;
  }

  const operators = {
    '+': add,
    '-': subtract,
    ':': divide,
    x: multiply,
  };

  const result = operate(operators[o], a, b);
  output.value = result;
  return result;
};

const btnNumbers = document.querySelectorAll('.btn-number');
btnNumbers.forEach(function (el) {
  el.addEventListener('click', function () {
    const value = this.getAttribute('data-value');
    if (!o) {
      a += value === '.' && a.indexOf(value) > -1 ? '' : value;
    } else {
      b += value === '.' && b.indexOf(value) > -1 ? '' : value;
    }

    displayValue();
  });
});

const btnOperators = document.querySelectorAll('.btn-operator');
btnOperators.forEach(function (el) {
  el.addEventListener('click', function () {
    if (!a) return;

    if (!!o && !!b) {
      a = equal();
      b = '';
    }

    o = this.getAttribute('data-value');
    displayValue();
  });
});

const btnDelete = document.querySelector('.btn-delete');
btnDelete.addEventListener('click', function () {
  if (!o) {
    a = a.slice(0, -1);
  } else {
    b = b.slice(0, -1);
  }

  displayValue();
});

const btnClear = document.querySelector('.btn-clear');
btnClear.addEventListener('click', function () {
  clear();
  displayValue();
});

const btnEqual = document.querySelector('.btn-equal');
btnEqual.addEventListener('click', function () {
  equal();
  clear();
});
