// function fizzbazz(total) {
//     for(let i = 1; i<=total; i++){
//         if(i % 3 == 0 && i % 5 == 0) {
//             console.log("FizzBuzz");
//         } else if(i % 3 == 0) {
//             console.log("fizz");
//         } else if (i % 5 == 0) {
//             console.log("Buzz");
//         } else{
//             console.log(i);
//         }
//     }
// }

// const hasil = fizzbazz(101)
// console.log(hasil);

// for(let i = 1; i < 100; i++){
//     if( i % 2 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     } else
//     if( i % 3 == 0) {
//         console.log("Fizz");
//     } else if( i % 5 == 0) { 
//         console.log("Buzz");
//     } else if( i % 8 == 0) {
//         console.log("NaNFizzBuzz");
//     } else {
//         console.log(i);
//     }
// }


// let genap = []
// let ganjil = []

// for(let i = 1; i <= 100; i++) {
//     if(i % 2 == 0) {
//         genap = [...genap, i]
//     } else {
//         ganjil = [...ganjil, i]
//     }
// }

// console.log({genap, ganjil})

// let prima = []

// for(let i = 1; i<=100; i++) {
//     let bill = 0
//     for(let a = 1; a <= i; a++){
//         if( i % a == 0) {
//             bill = bill + 1
//         }
//     }
//     if(bill == 2){
//         prima = [...prima, i]
//     }
// }

// console.log(prima);


// let prima = []

// for(let i = 1; i <= 100; i++){
//     let bill = 0;
//     for(let a = 1; a <= 100; a++){
//         if( i % a == 0) {
//             bill = bill + 1
//         }
//     }
//     if( bill == 2) {
//         prima = [...prima, i]
//     }
// }

// console.log(prima);


// let fibonanci = [];
// let n1 = 0;
// let n2 = 1;

// for(let i = 0; i <=10; i++){
//     if( i === 0 || i === 1){
//         fibonanci = [...fibonanci, i]
//     } else {
//         let total = n1 + n2;
//         fibonanci = [...fibonanci, total]
//         n1=n2
//         n2=total
//     }
// }

// console.log(fibonanci);


// let word1 = "aabaA";
// let word2 = "fraza";
// word3 = "a"

// function checkPalindrom(input){
//     let strArray = input.toLowerCase().split("")
//     let newwArr = strArray.join("")
//     let reverseArr = [...newwArr].reverse()
//     console.log(newwArr);
//     console.log(reverseArr);
// }

// console.log(checkPalindrom(word1));



// MENCARI NILAI TERTINGGI
var daftarNilai = [50, 75, 65, 85, 90]

var max = daftarNilai[0]
for(var i in daftarNilai) {
    if( daftarNilai[i] > max) {
        max = daftarNilai[i]
    }
}

console.log(`Nilai tertinggi adalah ${max}`);