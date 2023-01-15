const sumAll = function(...args) {
    var sum = 0;
    var sortedArgs = [];
    if (args[0] > args[1]) {
      sortedArgs.push(args[1]);
      sortedArgs.push(args[0]);
    }
    else if (args[0] < 0 || args[1] < 0) {
        return "ERROR";
    }
    else if (typeof args[0] != typeof 1 || typeof args[1] != typeof 1) {
        return "ERROR";
    }
    else {
      sortedArgs.push(args[0]);
      sortedArgs.push(args[1]);
    }
    for (i=sortedArgs[0]; i<sortedArgs[1]+1; i++) {
      sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
