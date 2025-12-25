// find the prime number given array.

let arr = [13,11,17,19,31,23,34,65,98,61,33];

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let primeNo = arr.filter(isPrime);
console.log(primeNo);