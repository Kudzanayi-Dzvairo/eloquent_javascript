// const square = function(x){
//     return x * x 
// }

// console.log(square(7))

// const makeNoise = function(){
//     console.log('Ping!')
// }

// makeNoise()

// const power = function(base, exponent){
//     let result = 1;
//     for(let count = 0; count < exponent; count++){
//     result *= base
//     }
//     return result;
// }

// console.log(power(2,2))

// let x= 10; 
// if(true){
//    let y = 20
//    var z = 30 
//    console.log(x + y + z)
// }

// console.log(x + z)

// const hummus = function(factor) {
//     const ingredient = function(amount, unit, name){
//         let ingredientAmount = amount * factor;
//         if(ingredientAmount > 1) {
//             unit += 's'
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`)
//     }
//         ingredient(1, "can", "chickpeas");
//         ingredient(0.25, "cup", "tahini");
//         ingredient(0.25, "cup", "lemon juice");
//         ingredient(1, "clove", "garlic"); 
//         ingredient(2, "tablespoon", "olive oil")   
//         ingredient(0.5, "teaspoon", "cumin")   
// }

// hummus(2)

// const power2 = (base, exponent) => {
//     let result = 1;
//     for(let count = 0; count < exponent; count++){
//         result *= base;
//     }
//     return result
// }

// console.log(power2(2,10))

// const square1 = (x) => {return x * x}
// const square2 = x => x * x

// console.log(square1(2))
// console.log(square2(2))

// function greet(who){
//     console.log("Hello " + who)
// }

// greet("Kudzanayi")
// console.log("Bye")

// function minus(a, b){
//     if(b === undefined) return -a;
//     else return a - b 
// }

// console.log(minus(10))

// console.log(minus(10, 5))

//     power3 = (base, exponent = 3) => {
//     let result = 1
//     for(let count = 0; count < exponent; count++){
//        result *= base
//     }
//     return result
// }

// console.log(power3(4))

// function wrapValue(n){
//     let local = n;
//     return () => local;
// }

// let wrap1 = wrapValue(1)
// let wrap2 = wrapValue(2)
// console.log(wrap1())
// console.log(wrap2())

// function multiplier(factor){
//     return number => number * factor
// }

// let twice = multiplier(2)
// console.log(twice(5))

// function power4(base, exponent) {
//     if(exponent == 0){
//         return 1
//     } else {
//         return base * power4(base, exponent - 1)
//     }
// }

// console.log(power4(2,2))

const minimum = (a,b) => {
    if(a < b) {
        return a
    } else {
        return b
    }
}

console.log(minimum( 1000 , 43333))

const isEven = (n) => {
    if(n === 0) return true; 

    if(n === 1) return false;
    
    if(n < 0)
    return isEven(-n)
    return isEven(n - 2)
    }

console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))