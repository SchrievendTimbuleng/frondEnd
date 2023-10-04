// buat Fungsi yang menerima 1 input berupa angka dan
// mengembalikan string apakah angkah negatif atau positif

function isAngka(number){
    if (number > 0) {
        console.log(number, "Positif")
    }
    else(
        console.log(number, "Negatif")
    )
}

isAngka(1);
isAngka(-2);

function isAngka(number, callback) {
    if (number > 0) {
        callback(number, "Positif");
    } else {
        callback(number, "Negatif");
    }
}

function callbackFunction(number, status) {
    console.log(number, status);
}

isAngka(1, callbackFunction);
isAngka(-2, callbackFunction);

  
