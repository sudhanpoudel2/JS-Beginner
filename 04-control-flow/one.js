 
 const score = 200;

 if(score>100){
    let power = "fly";
    console.log(`User Power : ${power}`);
 }

 const balance = 1000;

//  if(balance > 500) console.log("Test"),console.log("Test2");

if(balance <500){
    console.log("less than 500");
}else if(balance<700){
    console.log("Less then 700");
}else if(balance <900){
    console.log("less than 900");
}else{
    console.log("equal to 1000");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User loggedIN");
}