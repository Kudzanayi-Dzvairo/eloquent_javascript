// 0,1,2,3,4,5,6...
// 0,1,1,2,3,5,8...
// 2 + 1
// 2 = 1 + 1
// 1 = 1 + 0

function fib(number) {
    // case when number is 0
    if(number === 0){
 return 0
    }
    // case when number is 1
    if(number === 1){
        return 1
    }
    // normal case
    return fib(number - 1) + fib(number - 2)
}

// fib(1) + fib(0) => 1 + 0 => 1
// fib(3) => fib(2) + (fib(1) => fib(1)) + fib(0) + 1 => 1 + 1 + 0 => 2
// fib(4) => fib(3) + fib(2) => (fib(2) + fib(1)) + (fib(1) + fib(0)) => ( (fib(1) + fib(0)) + (fib(1) + fib(0)) ) + (1 + 0) => ((1 + 0) + (1 + 0)) + (1 + 0) => 3