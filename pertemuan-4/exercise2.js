//Buatlah fungsi yang menerima 1 input angka
//dan mengembalikan string, apakah angka yang dimasukan 
//adalah bilangan genap atau ganjil 
//dengan menggunakan bentuk IIFE dan callback function

//IIFE
//(function (angka) {
//    angka = 5
//    const result = angka % 2 === 0 ? "Genap" : "Ganjil";
//    console.log("angka" + angka + "adalah " + result)
//})();


//Callback

function cekGanjilGenap(angka, callback){
    const result = angka % 2 === 0 ? "Genap" : "Ganjil";
    callback (result);
}

function logResult(result){
    console.log("adalah bilangan " + result);
}

cekGanjilGenap(5, logResult);