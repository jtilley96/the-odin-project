const reverseString = function(string) {
    let stringArr = string.split('');
    let stringIndex = string.length - 1;
    let reversedString = '';
    for(i = stringIndex; i >= 0; i--) {
        reversedString += stringArr[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
