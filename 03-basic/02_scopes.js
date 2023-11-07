
// var c = 300;
let a = 500;

if(true) {
    let a = 5;
    const b = 9;
    // var c = 30;

    console.log("Inner : ",a);
}

console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Sudhan";

    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website); //error
    two();
}
 one();

if(true){
    const username = "ABC";
    if(username === "ABC"){
        const website = " Facebook";
        console.log(username + website);
    }
    // console.log(website); //error
}
// console.log(username);  //error

//++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++++++++++//

function addOne(num){
    return num + 1;
}
console.log(addOne(5));


const addTwo = function(nmb){
    return nmb + 1;
}
console.log(addTwo(4));
