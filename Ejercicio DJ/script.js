// Variables


// Create a variable called 'name' -which cannot be reassigned- and give it a value of "nathan".
let name = "nathan";
// La asignacion de la variable esta bien, pero dice "cannot be reassigned". Para eso podes usar `const`:
// const name = "nathan";

// Create a variable called 'age' -which can be reassigned- and give it a value of 25.
let age = 25;
// OK

// Create a variable called 'isMexican' -which cannot be reassigned- and give it a value of true.
const isMexican = true;
// OK

// Create a variable called 'hobbies' -which cannot be reassigned- and give it a value of an array with the following values:
// - "djing"
// - "sex"
// - "coding"
const hobbies = ["djing", "sex", "coding"];
// OK

// Create an object called 'person' with the following properties:
// - name
// - age
// - isMexican
// - hobbies
// When creating the object, use the variables you created above. (Do not re-type the values)
const person = {
    name,
    age,
    isMexican,
    hobbies
};
// Perfecto!



console.log(typeof sayHello())
// Aca no entendi qué quiciste hacer. Si queres imprimir a la consola el resultado de sayHello
// no deberias usar "typeof", sino simplemente llamar a la funcion:
// console.log(sayHello())

// Functions

// Create a function called 'sayHello' that takes a parameter called 'person' and returns the following string:
// "Hello, my name is " + name + " and I am " + age + " years old."
// When calling the function in the next step, pass in the 'person' object you created above, and use its properties to build the string.
function sayHello() {
    
    return [
        "Hello, my name is " + name + " and I am " + age + " years old."
    ];
}
// La definicion de la funcion está bien, pero te falto el "takes a parameter called 'person'".
// Fijate que la funcion no acepta ningun parametro (tenes que incluirlo dentro del parentesis).
// Asi:
// ```
// function sayHello(person) {
//     // el resto de la funcion
// }
// ```
// Como no le pasaste person como parametro a la funcion, las variables "name" y "age" que estas usando dentro de la funcion
// no corresponden al objeto person, sino a las variables que creaste afuera, que tienen el mismo nombre.
// La idea es que vos le puedas pasar a `sayHello` cualquier objeto `person` y que te imprima su name y su age.
// La funcion deberia ser asi:
// function sayHello(person) {
//      return "Hello, my name is " + person.name + " and I am " + person.age + " years old."
// }
// Y la idea es que la llames asi:
// const rojo = {
//     name: "German",
//     age: 85,
//     isMexican: false,
//     hobbies: ["drogas", "liberalismo"]
// }
// console.log(sayHello(rojo))
//  deberia imprimir a la consola: "Hello, my name is German and I am 85 years old."
// Pero tambien podes usar la misma funcion con otro objeto:
// const djere = {
//     name: "JP",
//     age: 34,
//     isMexican: false,
//     hobbies: ["fascismo"]
// }
// console.log(sayHello(djere))
//  deberia imprimir a la consola: "Hello, my name is JP and I am 34 years old."
// 
// Otra cosa: la funcion tiene que devolver directamente un string, no un array con un string adentro.
// Fijate en tu definicion de la funcion


// No entendi que quisiste hacer aca
if (typeof sayHello === 'object') {
    sayHello(person) = sayHello.toString();
};

// Call the function you created above and store the result in a variable called 'greeting'.
let greeting = sayHello(person).toString()
// El llamado de la funcion y la asignacion a greeting esta bien, pero no te hubise funcionado pq cuando definiste
// sayHello arriba, no toma ningun input. Por otro lado, el toString() no es necesario, la funcion deberia devolver
// directamente un string.
// let greeting = sayHello(person);

console.log(greeting)

// Now create another variable called parsedGreeting by splitting the greeting variable on each space. (Remember to use split() method)
let parsedGreeting = greeting.split(" ")
// OK!

console.log(typeof parsedGreeting)

// Aca la idea estaba bien: creas una funcion llamada uppercase, y despues se la pasas como "callback" a map.
// Pero esta mal planteada la funcion. La sintaxis esta mal (esto no compila) y fijate que por otro lado, tu funcion
// no devuelve nada.
function uppercase(greeting) {
    {greeting.toUpperCase}parsedGreeting
}
// Defino la funcion, que toma como argumento "word", que va a ser cada elemento dentro del array 'parsedGreeting'
// function uppercase(word) {
//     // Devuelvo esa palabra, pero convertida a uppercase
//     return word.toUpperCase();
// }

// Esto esta bien, pero no es necesario el segundo argumento cdo usas map
let uppercaseGreeting = parsedGreeting.map(uppercase,this);
// let uppercaseGreeting = parsedGreeting.map(uppercase);

console.log(uppercaseGreeting)