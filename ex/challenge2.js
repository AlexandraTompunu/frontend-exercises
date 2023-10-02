//IIFE

//(function cekBMI(berat, tinggi) {
//    berat = 70;
//    tinggi = 1.75;
//    const result = berat / (tinggi * tinggi);
//
//    console.log(result)
//})();

//Callback

function cekBMI(berat, tinggi, callback) {
    const result = berat / (tinggi * tinggi);
    callback(cekBMI);
}

function logResult(result) {
    console.log(result)
}

const berat = 70;
const tinggi = 1.75;

cekBMI(berat, tinggi, result);