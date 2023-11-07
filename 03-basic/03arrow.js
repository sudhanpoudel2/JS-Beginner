
const user = {
    username : "King",
    price : 888, 

    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to Website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Harry";
// user.welcomeMessage();

// console.log(this);

// function chiya(){
//     const chai = "Black";
//     console.log(this.chai);
// }
// chiya();

// const dari = function(){
//     const chai = "Black";
//     console.log(this.chai);
// }

const dari = () =>{
    const chai = "Black";
    console.log(this)
}
dari();

const addTwo = (n1 , n2) =>{
    return n1+n2;
}
console.log(addTwo(8,20));