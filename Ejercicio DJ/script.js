// Variables

let name = "nathan";

let age = 25;


const isMexican = true;

const hobbies = ["djing", "sex", "coding"];

const person = {
    name,
    age,
    isMexican,
    hobbies
};
console.log(typeof sayHello())

// Functions

function sayHello() {
    
    return [
        "Hello, my name is " + name + " and I am " + age + " years old."
    ];
}

if (typeof sayHello === 'object') {
    sayHello(person) = sayHello.toString();
};



let greeting = sayHello(person).toString()

console.log(greeting)

let parsedGreeting = greeting.split(" ")

console.log(typeof parsedGreeting)

function uppercase(greeting) {
    {greeting.toUpperCase}parsedGreeting
}


let uppercaseGreeting = parsedGreeting.map(uppercase,this);

console.log(uppercaseGreeting)