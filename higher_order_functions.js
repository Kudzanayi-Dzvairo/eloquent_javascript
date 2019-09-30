//abstrating repetion 

// for(let i =0; i < 10; i++){
//     console.log(i)
// }

function repeatLog(n){
    for(let i = 0; i < n; i++){
        console.log(i)
    }
}

function repeat(n, action){
    for(let i=0; i < n; i++){
        action(i)
        // console.log('hi')
    }
}

// repeat(3, console.log)

let labels = []

repeat(5, i => {
    labels.push(`Unit ${i + 1}`)
})
// console.log(labels)

//function creating function 

function greaterThan(n){
    return m => m > n
}

let greaterThan10 = greaterThan(10)

// console.log(greaterThan10(9))

function noisy(f) {
    return(...args) => {
        console.log("calling with", args);
        let result = f(...args)
        console.log("called with", args, "returned", result);
        return result;
    }
}

// noisy(Math.min)(3,2,1)

function unless(test, then){
    if(!test) then()
}

repeat(9, n => {
    unless(n % 2 === 1, () => {
        // console.log(n, "is even")
    })
})


array = ["A", "B"]

// array.forEach(l => console.log(l))

//Filtering Arrays 

function filter(array, test){
    let passed = [];
    for (let element of array){
        if(test(element)){
            passed.push(element)
        }
    }
    return passed
}

//map 

function map(array, transform) {
    let mapped = [];
    for (let element of array){
        mapped.push(transform(element))
    }
    return mapped
}

//sumarizing with reduce 

function reduce(array, combine, start){
    let current = start;
    for(let element of array) {
        current = combine(current, element)
    }
    return current;
}

// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b, 0))

