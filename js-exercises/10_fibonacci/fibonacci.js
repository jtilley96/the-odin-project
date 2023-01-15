const fibonacci = function(num) {
    if(num < 0) {
        return "OOPS";
    }
    if (typeof num == typeof "1") {
        num = parseInt(num);
    }
    var fib = [0, 1];
    var sum = 1;
    var x = 0;
    var y = 1;
    while (num > 1) {
      sum = fib[x] + fib[y];
      x++;
      y++;
      fib.push(sum);
      num--;
    }
    return sum;
  };

// Do not edit below this line
module.exports = fibonacci;
