const myNum = [1,2,3];

const mySum = myNum.reduce((acc,curr) => {
    // console.log(`acc :- ${acc} and curr:- ${curr}`);
    return acc+curr},0);
// console.log(mySum);

const shoppingCart = [
    {
        itemName : "jsCourse",
        price : 999
    },
    {
        itemName : "pyCourse",
        price : 980
    },
    {
        itemName : "javaCourse",
        price : 800
    },
    {
        itemName : "rubyCourse",
        price : 1111
    }
]

const sumOfPrice = shoppingCart.reduce((acc,item)=>{
    return acc+item.price;
},0)
console.log(sumOfPrice);