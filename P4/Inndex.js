// const age = 17; //Global

// const greetings = function () {
//     const job = "Teacher"; //lokal
//     return "Hello";
// };
// console.log(greetings "john");

// IIFE (Imediatley Invoked Function Expression)
// Fungsi yang tidak memiliki nama

// const output = (function (){
//     console.log "Hello IIFE" ;
//     return "Hello IIFE" 
// })();

// call back function

function logGreetings(greetings) {
    console.log(greetings);
}

function createGreetings(name, callback){
    const greetings = "Hello" + name;
    callback(greetings);
}
createGreetings("Hello", logGreetings);

// 
