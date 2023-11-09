// for of

const arr = [1,2,3,4,5,6];

for (const i of arr) {
    // console.log(i);
}

const country = ["Nepal","India","China","Srilanka"]

for (const index of country) {
    // console.log(index);
}

const greeting = "Hello World!";

for (const greet of greeting) {
    // console.log(`Each Char is ${greet}`);
}

//Maps

const map = new Map();
map.set ("IN" , "India");
map.set ("USA" , "United States of America");    //Map only allow unique value
map.set ("Fr" , "France");

console.log(map);

for (const [key , value] of map) {
    console.log(key, ":-", value);
}

const myObject ={
    "Name" : "Sudhan",
    "Lname" : "Poudel"
}
for (const [key,value] of myObject) {
    console.log(kay , ":-" , value);  // we should use another method for object, we will discuss it in another file
}