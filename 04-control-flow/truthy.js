const userEmail = [];

if(userEmail){
    console.log("Got user email");
}else  {
    console.log("don't have email");
}

//falsy value

//  false , 0 , -0 , null , "" , BigInt 0n , null , undefined , NaN ;

// truthy values

// "0", 'false', " ", [], {}, function(){}, 

if(userEmail.length === 0){
    console.log("Empty array");
}

const emptyObj = {};
if(Object.keys(emptyObj).length===0){
    console.log("Empty Object");
}

//Nullish Coalescing Operator (??) : Null Undefined

let val1;
// val1 = 5 ?? 10;    //OutPut 5
val1 = null ?? 10;    //OutPut 10

console.log(val1);

// Ternary Operator

// Condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("Greater than 80");