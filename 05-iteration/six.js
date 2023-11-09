// const coding = ["JS","Ruby","Java","Python"];

// const value = coding.forEach((item) => {
//     console.log(item);
// })

// console.log(value);

const myNums = [1,2,3,4,5,6,7];

// const newNums = myNums.filter((num) => num >4 );
// console.log(newNums);
const newNum = [];
myNums.forEach((num) =>{
    if(num>4){
        newNum.push(num);
    }
})
// console.log(newNum);

const books = [
    {title : "Book One" , genre : "Friction" , publish : 1981 , edition : 2004 },
    {title : "Book Two" , genre : "Non-Friction" , publish : 1992 , edition : 2008 },
    {title : "Book Three" , genre : "History" , publish : 1999 , edition : 2007 },
    {title : "Book Four" , genre : "Non-Friction" , publish : 1989 , edition : 2010 },
    {title : "Book Five" , genre : "Science" , publish : 2009 , edition : 2014 },
    {title : "Book Six" , genre : "Friction" , publish : 1987 , edition : 2010 },
    {title : "Book Seven" , genre : "History" , publish : 1986 , edition : 1996 },
    {title : "Book Eight" , genre : "Science" , publish : 2011 , edition : 2016 },
    {title : "Book Nine" , genre : "Non-Friction" , publish : 1981 , edition : 1989 }   
]

const mybook = books.filter((booki)=> booki.genre === "History");
const userBook = books.filter((booki)=>{
    return booki.publish>1985 && booki.genre === "History"
});
console.log(userBook);
// console.log(mybook);