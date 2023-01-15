const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = str.replace(/\s/g, '');
    str = str.toLowerCase();
    var reversed = [];
    var index = 0;
    for(i=str.length-1; i>=0; i--) {
        reversed[index] = str[i];
        index++;
    }
    var palindrome = "";
    for (i=0; i<reversed.length; i++) {
      palindrome += reversed[i];
    }
    if (str == palindrome) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
