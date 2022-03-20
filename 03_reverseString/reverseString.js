const reverseString = function(value) {
    let valueLength = value.length -1;
    let valueReversed = new Array();
    for(i = valueLength; i >= 0; i--) {
        valueReversed.push(value.charAt(i));
    }
    
    return valueReversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
