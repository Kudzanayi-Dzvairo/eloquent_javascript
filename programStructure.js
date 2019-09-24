//control flow
// let number = console.log('pick a number')
// console.log('the square of your number is ' + number * number)

// let theNumber = Number(console.log('pick a number'));
// if(!Number.isNaN(theNumber)){
// 	console.log('the square of your number' + theNumber * theNumber)
// }

//while and do whole loops

// let count = 0 

// while(count < 12){
//     console.log(count += 2)
// }``

// let hash = '#'
// for(i = 1; i <= 7; i++){
//     console.log(hash)
//     hash += '#'
// }

for(i=0; i <100; i++) {
    if(i % 15 === 0){
        console.log('fizzbuzz')
    }
    else if(i % 5 === 0) {
        console.log('buzz')
    }else if(i % 3 === 0){
        console.log('fizz')
    }else{
        console.log(i)
    }
}

