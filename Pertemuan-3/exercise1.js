//Buatlah fungsi yang menerima 1 input angka 
//dan mengembalikan string apakah angka yang dimasukan 
//adalah bilangan ganjil atau genap

function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
        return "angka" + angka + "adalah bilangan genap";
    } else {
        return "angka" + angka + "adalah bilangan ganjil";
    }
}

let output = cekGenapGanjil();
console.log(output)

  