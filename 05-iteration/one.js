for(let i = 0 ; i<10 ; i++){
    const element = i;
    if(element ===5){
        console.log("5 is best number");
    }
    console.log(i);
}

for (let i = 1; i <=10 ; i++) {
    console.log(`Outer loop ${i}`);
    
    for (let j = 1; j <=10; j++) {
        // console.log(`Inner loop ${j}`);
        console.log(i + '*' + j + '=' + i*j );
    }
}

//Using array in loop

let myArray = ["Harry" , "Sammy" , "Rockey"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//Using break and Continue

for (let i = 0; i <=20; i++) {

    if(i  === 5){
        console.log("Detected 5");
        // break;
        continue;
    }
    console.log(i);  
}

//Print Even Odd number

for (let i = 0; i <=20; i++) {
    if(i%2==0){
        console.log(`Print even number ${i}`);
    }else if (i%2==1){
        console.log(`Print odd number ${i}`);
    }
}