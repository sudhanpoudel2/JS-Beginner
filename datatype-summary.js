// Primitive

// 7 types => String , Number , Boolean , undefined , Null , Symbol , BigInt

let number = 123;   //Number
let name = "Sudhan"; //String
let IsLoggIn = true; //Boolean
let userEmail;  //Undefined
let outsideTemp = null; //Null
let Id = Symbol('123'); //Symbol
const anotherId = Symbol('123'); //Symbol

// console.log(Id === anotherId);

const bigNumber = 98694254449847150002n  //bigInt

// Reference (Non-Primitive)

// types = Array , Object , Function

const fighter = [ "Khabib" , "John" , "Alex"];  //Array

const person = {
    name : "Sudhan",
    age : 24,
    address : "Nepal"
}                                  //Object
// console.log(person);

let myFunction = function() {
    console.log("Hello World!");
}

console.log(typeof myFunction);
console.log("hello world!");