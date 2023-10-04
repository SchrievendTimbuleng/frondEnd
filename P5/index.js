let people = ["Greg", "Mary", "Devon", "James"];

//1 - FOR LOOP
for (let index = 0; index < people.length; index++) {
    console.log(people[index]);
}

//2 - FOR EACH
people.forEach(function (data) {
console.log(data)
});

//3 - MENGHAPUS DEPAN
let hapusGreg = people.shift();
console.log(people);

//4 - MENGHAPUS BELAKANG
let hapusJames = people.pop();
 console.log(people);

//5 - MENAMBAHKAN ELEMEN DIAWAL
let tambahAwal = people.unshift("Matt");
console.log(people);

//6 - MENAMBAHKAN ELEMEN AKHIR
let tambahAkhir = people.push("bob marley");
console.log(people);

//7 - STOP KETIKA MARRY
for (let i = 0; i < people.length; i++) {
console.log(people[i]);

  if (people[i] === "Mary") {
    break; // Exit the loop when "Mary" is encountered
  }
}
// console.log(people);
//8 - SLICE
let lengthPeople = people.length;

let slice = people.slice(2, lengthPeople);
console.log(slice);

//9 - menambahkan eli arti
people.splice(2, 1, "Elizabeth", "Artie");
 console.log(people);

//10 - concate
let withBob = ["Bob"];
let result = people.concat(withBob);
console.log(result);


