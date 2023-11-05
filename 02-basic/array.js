 //Array//
 const myArray = [1,2,3,4,5];
 const heros = ["Shaktiman", "Hatim"]

 const myArray2 = new Array(1,2,3,4,5,6)
 console.log(myArray[0]);

 //Array Method

 myArray.push(6);
 myArray.push(7);
 myArray.pop();

myArray.unshift(0);
myArray.shift();

const newArray = myArray.join();

console.log(myArray.includes(9));
 console.log(myArray);
 console.log(typeof newArray);

//Slice , Splice

console.log("A ", myArray);
const myn1 = myArray.slice(1,3);

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3);
console.log("C ",myArray);
console.log(myn2);