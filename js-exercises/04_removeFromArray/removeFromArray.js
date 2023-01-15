const removeFromArray = function(...args) {
    var arr = args[0];
    var count = 1;
    for (i=1; i<args.length; i++) {
      for (j=0; j<arr.length; j++) {
        if (args[i] == arr[j] && typeof args[i] == typeof arr[j]) {
          arr.splice(arr.indexOf(arr[j]), 1);
        }
      }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
