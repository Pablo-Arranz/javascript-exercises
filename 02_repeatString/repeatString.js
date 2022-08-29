const repeatString = function(a, b) {
    if (b < 0) {
        return('ERROR')
    } else {
        b = Number(b);
        return(a.repeat(b)); 
    }
    
};

// Do not edit below this line
module.exports = repeatString;
