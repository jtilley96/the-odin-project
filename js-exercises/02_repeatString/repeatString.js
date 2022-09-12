const repeatString = function(stringToRepeat, repeatCount) {
    let resultString = '';
    if(repeatCount < 0) {
        return "ERROR"
    }
    for(i = 0; i < repeatCount; i++) {
        resultString += stringToRepeat;
    }
    return resultString;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
