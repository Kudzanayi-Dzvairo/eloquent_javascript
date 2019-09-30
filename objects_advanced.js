//methods 

// let rabbit = {};

// rabbit.speak = function(line){
//     console.log(`The rabbit line says ${line}`)
// }

// rabbit.speak("I'm alive")

// function speak(line){
//     console.log(`The ${this.type} rabbit says '${line}'`)
// }

// let whiteRabbit = {type: "white", speak}
// let hungryRabbit = {type: "hungry", speak}

// whiteRabbit.speak("Oh my ears and whiskers" + "how late it's getting!")

// hungryRabbit.speak("I could use a carrot right now")

// speak.call(hungryRabbit, "yeeer")
// speak.call(whiteRabbit, "I wish I was black")

// function normalize() {
//     console.log(this.coords.map(n => n / this.length))
// }
// normalize.call({coords: [0, 2, 3], length: 5})


// prototypes
let empty = {};
// console.log(empty.toString)
// console.log(empty.toString())

// console.log(Object.getPrototypeOf({})== Object.prototype)

// console.log(Object.getPrototypeOf(Object.prototype))

// console.log(Object.getPrototypeOf(Math.max) == Function.prototype)

// console.log(Object.getPrototypeOf([]) == Array.prototype)

// let protoRabbit = {
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`)
//     }
// };

// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = 'killer';
// killerRabbit.speak('SKREEE!') 

// function makeRabbit(type){
//     let rabbit = Object.create(protoRabbit)
//     rabbit.type = type;
//     return rabbit
// }

// let bunny = makeRabbit('bunny')
// console.log(bunny.speak('Im cute'))

// function Rabbit(type){
//     this.type = type
// }

// Rabbit.protototype.speak = function(line){
//     console.log(`This ${this.type} rabbit says '${line}`)
// }

// let weirdRabbit = new Rabbit("weird")

// console.log(Object.getPrototypeOf(Rabbit) == Function.prototype)

// console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype)


class Rabbit{
    constructor(type){
        this.type = type
    }
    speak(line){
        console.log(`This ${this.type} rabbit says '${line}`)
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit('black')


let object = new class { getWord() {return "hello";}}
// console.log(object.getWord())

// Rabbit.prototype.teeth = "small";

console.log(killerRabbit.teeth)

killerRabbit.teeth = "long, sharp, and bloody"

console.log(killerRabbit.teeth)

console.log(blackRabbit.teeth)

console.log(Rabbit.prototype.teeth)