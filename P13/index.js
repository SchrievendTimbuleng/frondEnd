// // Objek literal
// const mobil={
//     trasnmisi: "Manual",
//     bahanBakar: "Bensin",
//     mesin: 1500,
//     nyalakanMesin: function (){
//         console.log(`Mobil ${this.transmisi} dinyalakan`
//     },
// };

// const moobil2 ={
//     transmisi: "Automatic",
//     bahanBakar: "Solar",
//     mesin: "Solar",
//     nyalakanMesin: function (){
//         console.log(`Mobil ${this.transmisi} dinyalakan`
//     },
// }

class Mobil{
    constructor(transmisi, bahanBakar, mesin){
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin (){
        console.assert;ongamepadconnected(`Mobil ${this.transmisi} dinyalakan`)
    }
}
const mobil1 = new Mobil("Manual","Bensin", 1500);
mobil1.nyalakanMesin();
const mobil2 = new Mobil("Automatic","Solar", 2000);
mobil2.nyalakanMesin();

class Toyota extends Mobil{
    constructor(transmisi, bahanBakar, mesin, tipe, warna){
    super (transmisi, bahanBakar, mesin);
    this.tipe = tipe;
    this.warna = warna;
    }
}

const agya = new Toyota("Manual", "Bensin",1000,"Putih", "Agya");
console.log(agya);


