const removeFromArray = function() {
    let arrAllParams = Array.from(arguments);
    let arrFirstParam = arrAllParams.shift();
    let valueForDeletion = arrAllParams;
    let itemValid = new Array();

    for (i=0;i < arrFirstParam.length; i++){

        if(valueForDeletion.includes(arrFirstParam[i])){
         
        }
        else {
        itemValid.push(arrFirstParam[i]);
         
        }
         
        
    }
    return itemValid;     
};


// Do not edit below this line
module.exports = removeFromArray;
