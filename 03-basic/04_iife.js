// Immediately invoked function Expression

(function tea(){
    console.log(`DB CONNECTED`);
})();

(function coffee(){
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})("Sudhan");
