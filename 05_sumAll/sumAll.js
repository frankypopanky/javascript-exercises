const sumAll = function() {
    function compareNumbers(a,b) {
    return a - b;
    };
    let arrValues= new Array();
    arrValues = Array.from(arguments);
    let arrValuesSorted = arrValues.sort(compareNumbers);
    console.log(arrValuesSorted);
    let valueOne = arrValuesSorted[0];
    let valueTwo = arrValuesSorted[1];
    let valueDifference = valueTwo-valueOne;
    let valueDifferenceFactor = (valueDifference -1 )/2;
    if (valueDifferenceFactor < 0) {
        valueDifferenceFactor = 0;
    }
    console.log('value1:'+valueOne);
    console.log('value2:'+valueTwo);
    console.log('valueDiff: '+valueDifference);
    console.log('valueDifferenceFactor: '+valueDifferenceFactor);
    let sumValue = valueOne+valueTwo;
    let productSumValueDifference = sumValue * valueDifferenceFactor;
    console.log('sumValue: '+sumValue);
    console.log('productSumValueDifference: '+productSumValueDifference);
    let result= sumValue + productSumValueDifference;
    console.log('result: '+result);
    if(result <= 0 || typeof(valueOne) != 'number' || typeof(valueTwo) != 'number'){
        return('ERROR');  
    }
    else {
        return result;
    }

};

// Do not edit below this line
module.exports = sumAll;
