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

// let journal = [
//     {events: ["work", "touched tree", "pizza", "running", "television"],
//      squirrel: false},
//      {events: ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed tree"],
//     squirrel: false},
//     {events: ["weekend", "cycling", "break", "peanuts", "beer"],
//     squirrel: true}
// ]

// console.log(journal[2].events[1])

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10}

// console.log(object1 == object2)

// console.log(object1 == object3)

object1.value = 15;
// console.log(object2.value)

// console.log(object3.value)

let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel})
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false)
addEntry(["work", "ice-cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false)
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true)

// console.log(journal)

for (let entry of journal) {
    // console.log(`${entry.events.length} events`)
}

function journalEvents(journal){
    let events = [];
    for(let entry of journal){
        for(let event of entry.events){
            if(!events.includes(event)){
                events.push(event)
            }
        }
    }
    return events;
}

// console.log(journalEvents(journal))

let todoList = [];
function remember(task){
    todoList.push(task)
    console.log(todoList)
}

function getTask(){
    return todoList.shift();
}

function rememberUrgently(task){
    todoList.unshift(task)
}

// remember('eat')
// remember('sleep')
// remember('pray')
// remember('study')

// console.log(getTask())

// rememberUrgently('get over this girl')

// console.log(todoList)

// console.log(remember("cook dinner"))

// console.log(todoList.indexOf('cook dinner'))

// console.log([0,1,2,3,4,5].slice(1,5))

//Rest 

function max(...numbers){
    let result = -Infinity;

    for (let number of numbers){
        if(number > result) result = number
    }
    return result
}

// console.log(max(4, 1, 9, -2))

// let words = ["never", "fully"]
// console.log("will", ...words, "understand")

// let {name, age} = {name: 'K', age:31}

// console.log(name, age)

//takes two arguments (start, end)
//returns an array containing numbers from start to end 

function range(start, end, step=1){
    let array = []
    for(let i = start; i <= end; i +=step){
        array.push(i)
    }
    return array
}

// console.log(range(1, 10, 2))

function sum(array){ 
    let number = 0

    for(let i = 0; i < array.length; i++){
        number += array[i]
    }
 return number
}

// console.log(sum([1,2,3,4,5,6,7,8,9,10]))

function reverseArray(array){
    let newArray = [] 
    for(let i = 0; i <= array.length + 3; i++){
        //remove first value from array
        //place in new array
       let value = array.shift(array[i])
       newArray.unshift(value)
    }
    return newArray
}

function reverseArray2(array){
    let newArray = []
    for(const i in array){
        newArray.unshift(i)
    }
    return newArray
}

console.log(reverseArray2([1,2,3,4,5]))

function reverseArrayInPlace(array){

    for(let i = 0; i <= array.length; i++){

    }
}