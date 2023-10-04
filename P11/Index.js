// import { fullName as namaLengkap, hello, john, numbers } from "./utilt.js";

// console.log(namaLengkap);
// console.log(numbers);
// console.log(john);
// hello();

//syncrhonus => single thread
console.log("Proses 1");
console.log("Proses 2");
console.log("Proses 3");
console.log("Proses 4");


//asyncrhonus => multi thread
setTimeout(  =>{
    console.log("Proses 1");
}, 3000);

