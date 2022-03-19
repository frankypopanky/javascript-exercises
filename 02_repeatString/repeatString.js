const repeatString = function(string, number) {
    if (number < 0) {
        let value = new Array();
        value.push('ERROR');
        return value.toString();
    }
    else{
        let value=new Array();
        for(i=0;i<number;i++){
            value.push(string); 
         }
        return value.join('');
    }

  };
// Do not edit below this line
module.exports = repeatString;
