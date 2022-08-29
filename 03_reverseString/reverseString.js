const reverseString = function(phrase) {
    let string = '';
    for (let i = phrase.length - 1; i >= 0; i--) {
        string += phrase.substr(i, 1);
    }
    
    return string;
};
// Do not edit below this line
module.exports = reverseString;
