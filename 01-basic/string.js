
const name = "Sudhan";
const repoCount = 19;

// console.log(name + repoCount + " Value");

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("MMAFighter");

console.log(gameName[0]);
console.log(gameName.toUpperCase);
console.log(gameName.length);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('A'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-9, 4);
console.log(anotherString);

const newStringone = "    Sudhan    ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https//sudhan.com/sudhan%20poudel"
console.log(url.replace('%20' , '_'));

console.log(url.includes('sudhan'));

console.log(gameName.split('_'));