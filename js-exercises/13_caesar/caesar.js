const caesar = function(arr, shift) {
    var res = [];
    for(i=0; i<arr.length; i++) {
        var input = arr.charCodeAt(i);
        input += shift;  
        var temp = String.fromCharCode(input);
        res.push(temp);  
    }
    res = res.join();
    res = res.replace(/,/g, "");
    return res;
};
// Do not edit below this line
module.exports = caesar;
