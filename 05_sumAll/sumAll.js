const sumAll = function(n1, n2) {

    if(typeof n1 != 'number' || typeof n2 != 'number'){
        return 'ERROR'
    }
    else if (n1 < 0 || n2 < 0) {return 'ERROR'}

    if(n1 > n2){
        let temp = n1;
        n1 = n2;
        n2 = temp;
    }
    
    let sum = 0;
    while(n1 <= n2){
        sum += n1
        n1++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;