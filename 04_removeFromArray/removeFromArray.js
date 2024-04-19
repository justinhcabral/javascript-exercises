const removeFromArray = function(array,...numbersToRemove) {
    let newArray = [];
    for(const element of array){
        if(!numbersToRemove.includes(element)){
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
