// // 1. Sonning darajasini hisoblash
// let son = 3, daraja = 5;
// let natija = son ** daraja;
// console.log(natija); 

// // 2. O'rta arifmetik va geometrik qiymatlar
// let son2 = 48;
// let orta_arifmetik = (son + son2) / 2;
// let orta_geometrik = Math.sqrt(son * son2);
// console.log(orta_arifmetik, orta_geometrik); 

// // 3. Sonning ishorasini aniqlash
// let n = 10;
// let ishora = n > 0 ? 1 : n < 0 ? -1 : 0;
// console.log(ishora);

// // 4. Kvadrat tenglama ildizlar soni
// let A = 1, B = -6, C = 9;
// let D = B ** 2 - 4 * A * C;
// let ildizlar_soni = D > 0 ? 2 : D === 0 ? 1 : 0;
// console.log(ildizlar_soni);

// // 5. Doiraning yuzini hisoblash
// let radius = 5;
// let doira_yuzi = Math.PI * radius ** 2;
// console.log(doira_yuzi); 

// // 6. Ikki son orasidagi yig'indi
// let sonA = 8, sonB = 10;
// let oraliq_yigindi = sonA > sonB ? 0 : ((sonB * (sonB + 1)) / 2) - ((sonA * (sonA - 1)) / 2);
// console.log(oraliq_yigindi); 

// // 7. Kalkulyator
// let son1 = 10, son2 = 15, amal = "*";
// let hisoblash = amal === "+" ? son1 + son2 : amal === "-" ? son1 - son2 : amal === "*" ? son1 * son2 : amal === "/" ? son1 / son2 : 0;
// console.log(hisoblash); // 150

// // 8. Juft yoki toqligini tekshirish
// let k = 10;
// let juftmi = k % 2 === 0;
// console.log(juftmi); 

// // 9. Uchta sonni tartiblash
// let x = 10, y = 5, z = 8;
// let tartiblangan = [x, y, z].sort((a, b) => a - b);
// console.log(tartiblangan[0], tartiblangan[1], tartiblangan[2]); 

// // 10. K soni N ning darajasi ekanligini tekshirish
// let K = 8, N = 2;
// let darajaTekshir = (function(K, N) {
//     while (K > 1) {
//         if (K % N !== 0) return false;
//         K /= N;
//     }
//     return K === 1;
// })(K, N);
// console.log(darajaTekshir); 
