const add = function(...args) {
  var sum = 0;
	for (i=0; i<args.length; i++) {
    sum += args[i];
  }
  return sum;
};

const subtract = function(...args) {
  var sum = args[0];
	for (i=1; i<args.length; i++) {
    sum -= args[i];
  }
  return sum;

};

const sum = function(arr) {
	var sum = 0;
  for (i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  var product = arr[0];
	for (i=1; i<arr.length; i++) {
    product *= arr[i];
  }
  return product;

};

const power = function(...args) {
	return Math.pow(args[0], args[1]);
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  }
  var res = num;
  num--;
	while (num > 0) {
    res *= num;
    num--;
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
