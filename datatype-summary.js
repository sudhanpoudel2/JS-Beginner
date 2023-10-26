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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Type of Memory
//  Stack(Premetive) and Heap(Non Premetive)

// Stack example

let yourName = "Sudhan";
let anotherName = yourName;
yourName = "Monster";

console.log(yourName);
console.log(anotherName);

//Heap Example

let userOne = {
    name : "Sudhan Pooudel",
    email : "sudhanpoudel2@gmail.com"
}

/*let userTwo = {
    name :"Fighter"
}*/

let userTwo = userOne;
userTwo.name = "Fighter";

console.log(userOne.name);
console.log(userTwo.name);