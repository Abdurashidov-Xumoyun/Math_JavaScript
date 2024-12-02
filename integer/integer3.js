/*
Uch xonali ​a​ butun son berilgan, undan boshida turgan raqam bilan oxirida turgan raqamni joyini o’zgartirib xosil bo’lgan sonni chiqaring.
 */


let num = 321;

let yuzlik = Math.floor(num / 100);
let onlik = Math.floor((num % 100) / 10);
let birlik = num % 10;

let newNum = birlik * 100 + onlik * 10 + yuzlik;
console.log(newNum);



