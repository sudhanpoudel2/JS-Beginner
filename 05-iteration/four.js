const myObject ={
    js : "JavaScript",
    OOP : "C++",
    rb : "Ruby",
    swift : "Swift of apple"
}
for (const key in myObject) {
    console.log(myObject[key]);
    console.log(`${key} = ${myObject[key]}`);
}

const Programming = ["JS" ,"C++" ,"Py" ,"OPP"];

for (const key in Programming) {
    console.log(key);
    console.log(Programming[key]);
}

const map = new Map();
map.set ("IN" , "India");
map.set ("USA" , "United States of America");    //Map only allow unique value
map.set ("Fr" , "France");

for (const key in map) {
    console.log(map[key]);
}