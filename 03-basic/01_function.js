
function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("N");
}

sayMyName();  //Execution

// sayMyName (Reference)

function addTwoNumber(num1 , num2) /*Parameter*/{
    let result = num1 + num2;
    return result;
}

const result = addTwoNumber(5,8); //Argument

// console.log("Result : ",result);

function logginUserMessage(Username="Sudhan"){

    if(Username === undefined){
        console.log("Please Enter Your Username");
        return;
    }
    return `${Username} just logged in`;
}

// console.log(logginUserMessage("Sudhan"));
console.log(logginUserMessage());

function calculateCartPrice(val1,  val2, ...num1){
  return num1;
}

// console.log(calculateCartPrice(200,300,400));

const user ={
    username : "Sudhan",
    price : 600
}

function priceTag(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

priceTag(user);

const newArray = [200,500,800];

function myArray(getarray){
    return getarray
}

console.log(myArray(newArray));
