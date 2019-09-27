let doh = "Doh"
// console.log(typeof doh.toUpperCase)
// console.log(doh.toUpperCase())

//Array + methods
let sequence = [1,2,3]
sequence.push(4)
sequence.push(5)
// console.log(sequence)

//Object 
let day1 = {
    squirrel: false,
    events: ['work', "touched tree", "pizza", "running"],
    1: "one"
}

// console.log(day1.squirrel)
// console.log(day1.wolf)
// day1.wolf = false
// console.log(day1[1])

let descriptions = {
    work: "Went to work",
    "touched tree": "Touched a tree"
}

let anObject = {left: 1, right: 2}
delete anObject.left
// console.log(anObject.left)

// console.log("right" in anObject)

// console.log (Object.keys(day1))

let objectA = {a:1, b:2};
Object.assign(objectA, {b:3, c:4})
// console.log(objectA)

let objectB = {c:3, d:4, e:5, f:6, g:7}

let objectC = {...objectB, ...{h:8, i:9, j:10, k:11}}

// console.log(objectC)

let journal = [
    {events: ["work", "touched tree", "pizza", "running", "television"],
     squirrel: false},
     {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed tree"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true}
]

// console.log(journal[2].events[1])

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10}

console.log(object1 == object2)

console.log(object1 == object3)