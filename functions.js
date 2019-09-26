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

const power2 = (base, exponent) => {
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result
}

console.log(power2(2,10))

const square1 = (x) => {return x * x}
const square2 = x => x * x

console.log(square1(2))
console.log(square2(2))

function greet(who){
    console.log("Hello " + who)
}

greet("Kudzanayi")
console.log("Bye")