const removeFromArray = function(array, ...args) {
    
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < args.length; j++) {
            if(args[j] == array[i] && typeof args[j] === typeof array[i]){
                array.splice(i, 1);
                j = -1;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
