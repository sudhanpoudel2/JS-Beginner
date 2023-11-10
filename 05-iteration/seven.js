const  myNumber = [1,2,3,4,5,6];

// const newNumber = myNumber.map((num)=>num+10);
// console.log(newNumber);

const newNumber = myNumber.map((num) => num*10).map((num) => num + 10);

console.log(newNumber);