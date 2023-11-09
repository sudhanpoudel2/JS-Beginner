const coding = [ "JS","Ruby","Jave","Python","CPP"];

// coding.forEach(function (val){
//     console.log(val);
// }) 

//We didnt use name in function because its callback function

// using Arrow function

// coding.forEach((val) =>{
// console.log(val);
// })

// function printMe(Item){
//     console.log(Item);
// }
// coding.forEach(printMe);

// coding.forEach((item , Array , index) =>{
//  console.log(item , Array , index);
// })

const myCoding = [
    {
        languageName : "JavaScript",
        languageFile : "JS"
    },
    {
        languageName : "Java",
        languageFile : "J"
    },
    {
        languageName : "Python",
        languageFile : "PY"
    },
    {
        languageName : "Ruby",
        languageFile : "Rb"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFile);
})