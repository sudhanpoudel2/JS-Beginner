//Singleton
//Object.create

//Object literals

const mySymbol = Symbol("Key1");

const jsUser = {
    name : "Sudhan",
    [mySymbol] : "key1",
    age : 24,
    location : "Arghakhanchi",
    email : "sudhanpoudel2@gmail.com",
    isLoggIn : false,
    lastLogginDays : ["Monday" , "Tuesday"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySymbol]);

// jsUser.email = "sudhu@gmail.com";
// Object.freeze(jsUser);
// jsUser.email = "rajan@gmail.com";
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello js User");
}

jsUser.greetingTwo = function() {
    console.log(`Hello js User,${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


