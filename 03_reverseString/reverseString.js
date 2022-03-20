const reverseString = function(value) {
    let valueLength = value.length -1;
    let valueToReverse = new Array();
    for(i = valueLength; i >= 0; i--) {
        valueToReverse.push(value.charAt(i));
    }
    
    return valueToReverse.join('');
};

// Do not edit below this line
module.exports = reverseString;
