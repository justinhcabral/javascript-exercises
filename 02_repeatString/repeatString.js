const repeatString = function(text, numberOfTimes) {
    let string ="";
    if(numberOfTimes<0){
        return "ERROR";
    }
    for(i=0; i<numberOfTimes;i++){
        string+=text;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
