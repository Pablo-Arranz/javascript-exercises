const add = function(a,b) {
	let addResult = a + b;
  return addResult;
};

const subtract = function(a,b) {
	let subResult = a - b;
  return subResult;
};

const sum = function(array) {
  let sumResult = 0;
  for (let i = 0; i < array.length; i++) {
    sumResult += Number(array[i]);
  }
  // sumResult = array.forEach(x => (sumResult + array[x]));
  return sumResult;
};

const multiply = function(array) {
  let multResult = 1;
  for (let i = 0; i < array.length; i++) {
    multResult *= Number(array[i]);
  }
  return multResult;
};

const power = function(base, exp) {
	let powResult = 1;
  for (let i = 0; i < exp; i++) {
    powResult *= base;
  }
  return powResult;
};

const factorial = function(a) {
	let factResult = 1;
  if (a === 0) {
    return 1;
  } else {
  for (let i = 1; i <= a; i++) {
    factResult *= i;
  }
  return factResult;
  }
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
