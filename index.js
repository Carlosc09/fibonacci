// this program tries to find the next prime fibonacci number.
// i.e. - given a input n, the `nxtPrmFib` function returns a number which is both prime and fibonacci and is greater than the input number.

// the program below is complete and works as detailed in the requirements.
// the task here is to:

// 1. rationalize and understand the code as best you can.
// 2. open a PR to improve the code as you see fit.

// Converting to an Angular app or typescript is not considered a necessity here.
// We're mostly interested in understanding how engineers can critique the code & suggest improvements.

const isPrimeNumber = (num) => {
    for(var i = 2; i < num; i++) {
        if  (num % i === 0) {
            return false;
        } 
    }
    return num > 1;
};

const fibonacci = (num) => {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
};

const nextPrimFibonacci = (number) => {
    let result = 0;
    let l = 1;
    let fib; 
    while (!result) {
        fib = fibonacci(l);
        console.log('fib', fib, number);
        if (fib > number) {
            if (isPrimeNumber(fib)) {
                result = fib;
            }
        }
        l++;
        console.warn('bumping to', fib);
    }
    return result;
}

console.log('Next prime fib ', nextPrimFibonacci(20));
