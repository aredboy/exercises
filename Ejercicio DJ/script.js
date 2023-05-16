// Variables

let name = "Nathan";

let age = 25;


const isMexican = true;

const hobbies = ["djing", "sex", "coding"];

const person = {
    name,
    age,
    isMexican,
    hobbies
};

console.log(sayHello())


// Functions

function sayHello(_person) {
    
    return [
        "Hello, my name is " + name + " and I am " + age + " years old."
    ];
}



let greeting = sayHello(person).toString()

console.log(greeting)

let parsedGreeting = greeting.split(" ")


console.log(parsedGreeting)


// Now create another variable called uppercaseGreeting by mapping over the parsedGreeting array 
// and converting each word to uppercase. (Remember to use map() method)

function uppercase(parsedGreeting) {
    return parsedGreeting.toUpperCase()
}

let uppercaseGreeting = parsedGreeting.map(uppercase);

console.log(uppercaseGreeting)

// Now create another variable called finalGreeting by joining the uppercaseGreeting array back 
// into a string. (Remember to use join() method)

let finalGreeting = uppercaseGreeting.join(" ")

console.log(finalGreeting)


// Loop through the properties of the person object and console.log each property name and its value.
// The output should look like this:
// name: nathan
// age: 25
// isMexican: true
// hobbies: ["djing", ...etc]
// Hint: You can use a for...of loop to loop through an object's properties. (It's called for...of loop in the docs)
          // Or you can use Object.keys() to get an array of the object's property names, and then loop through that array.
          // A final option is to use Object.entries()
          // Check the documentation to understand how these methods work.

// Answer
// One way would be..
// for (prop in person) {
//     console.log(`${prop}:${person[prop]}`)
// }

// Or
// const props = Object.keys(person)
// console.log(props)
// props.forEach((key)=>{
//     console.log(`${key}:${person[key]}`)
// })

//Or
const props = Object.entries(person).forEach(([key,value])=> {
    console.log(`${key}:${value}`)
})


// Write a for loop that iterates from 25 to 100. For each iteration, it will check if the current 
// number is even or odd, and display a message in the console.

let num = 24
let one = 1

while (num<100) {
    num += one
    // console.log(num)
    if (num % 2 == 0) {
        console.log('number is even')
    }
    else {console.log('number is odd')}
}


// Create an object called squareRoots.
// Write a for loop that iterates from 5000 to -5000. For each number, it will create a property 
// on that object with that number, and its value should be the square root of that number.
// For example, squareRoots[25] should equal 5.

const squareRoots = {}

let numb=5000
let res = Math.sqrt(numb);

for (numb;numb>-5000;numb--) {
    squareRoots[numb] = res;
}

console.log(squareRoots)

// No pude lograr que itere en el orden que quiero, el objeto empieza de 0 a 5000 y cuando llega a 5000
// empieza con el -1 hasta el -5000. 

// Create a function called 'add' that takes two parameters and returns the sum of those two numbers.


// One way could be:
// let params = [1,2];
// const add = params.reduce((accumulator,currentValue) => {
//     return accumulator + currentValue
// },0))
// console.log(add()


// Another:
// function add() {
//     return Array.prototype.reduce.call(arguments, function(a,b) {
//         return a+b;
//     }, 0)
// }
// console.log(add(1,2))


// Another:
function add() {
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(add(1,2))

// Create an ARROW function called 'subtract' that takes two parameters and returns the difference 
// of those two numbers. (check the documentation for arrow functions)

const subtract = (a,b) => a-b;

console.log(subtract(3,2))

// Create a variable called allNumbers that is an array of numbers from 1 to 100.
// Using the filter() method of arrays, create a new array called evenNumbers that contains only 
// the even numbers from the allNumbers array.

// one way..
// let allNumbers = {}
// let i = 1 

// allNumbers[Symbol.iterator] = function*(i) {
//         for(i; i<=100; i+=1) {
//             yield i;
//         }
//     }

// console.log(typeof[...allNumbers])

// another..
// let all = [];

// for (var i = 1; i <= 100; i++) {
//     all.push(i)
// }

// let allNumbers = Array.from(all)

// another..

let allNumbers = [...Array(100).keys()]

console.log(allNumbers)

// More advanced stuff:
// Create a function called 'addo' that takes an indefinite number of parameters and returns the sum of all of them.

function addo(...args){
    return args.reduce(function (a, b){
        return a + b;
    })
}

console.log(addo(4,8,9))