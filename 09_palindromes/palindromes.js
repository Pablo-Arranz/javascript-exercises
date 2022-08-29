const palindromes = function (string) {
    let replaced = string.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let inversed =  replaced.split('').reverse().join('');
    return replaced === inversed;
};

// Do not edit below this line
module.exports = palindromes;
