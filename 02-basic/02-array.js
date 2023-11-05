const marverHeros = [ "Thor" , "IronMan" , "SpiderMan"];
const dcHeros = ["BatMan" , "Flash" , "SuperMan"];

// marverHeros.push(dcHeros);
// console.log(marverHeros);
// console.log(marverHeros[3]);
// const suyperHeros = marverHeros.concat(dcHeros);
// console.log(suyperHeros);

const allHeros = [...marverHeros, ...dcHeros];
console.log(allHeros);


const anotherArray = [1,2,3,[4,5],6,7,[8,9,10,[11,12],13],14,15]

const real_another_array = anotherArray.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Sudhan"));
console.log(Array.from("Sudhan"));
console.log(Array.from({name : "Sudhan"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));