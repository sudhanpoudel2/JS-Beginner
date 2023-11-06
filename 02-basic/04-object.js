// const tinderUser = new Object();
const tinderUser = {};
tinderUser.name = "Rockey";
tinderUser.id = "Harid";
tinderUser.isLoggIn = false ;

// console.log(tinderUser);

const regularUser = {
    email : "love@gmail.com",
    fullName :{
        userName :{
            Firstname : "Sudhan",
            Lastname : "Poudel"
        }
    }
}


// console.log(regularUser);

const obj1 = {1:"abc" , 2:"def"};
const obj2 = {3:"ghi" , 4:"jkl"};

// const obj3 = Object.assign(obj1 , obj2);
// console.log(obj3);

// const obj3 = {...obj1 , ...obj2};
// console.log(obj3);

const user = [
   
    {
        id : 1,
        email : "sudhan@poudel"
    },
    {
        id : 2,
        email : "rajan@poudel"
    }
]

user[1].email;
// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggIn"));

const course = {
    coursename : "JavaScript",
    Price : 999,
    courseInstructor : "Sudhan"
}

const {courseInstructor : instructer} = course ;
// console.log(courseInstructor);
console.log(instructer);
