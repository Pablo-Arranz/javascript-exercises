const seq = [1,1];
    const fibonacci = function(n) {
    // for (i = 2; i < n + 2; i++) {
    //     let fibNum = seq[(i-1)] + seq[(i-2)];
    //     seq.push(fibNum);
    // }
    // return seq[n-1];
    
    
    n = Number(n);
    if (n < 0) return('OOPS');
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
};

// Do not edit below this line
module.exports = fibonacci;
