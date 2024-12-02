// Uch xonali ​a​ butun son berilgan, undan o’nlik xona birligidagi raqam bilan yuzlik xona birligida turgan raqamlarni joyini o’zgartirib xosil bo’lgan sonni chiqaring.

// 1- Javoblar 435
// 2- Javoblar 213
// 3- Javoblar 555

{
  let a = 345;

  let yuzlik = Math.floor(a/100);
  let onlik = Math.floor((a % 100) / 10);
  let birlik = a % 10;
  
  let newNum = onlik * 100 + yuzlik * 10 + birlik;
  console.log(newNum);  
}

{
  let a = 123;

  let yuzlik = Math.floor(a/100);
  let onlik = Math.floor((a % 100) / 10);
  let birlik = a % 10;
  
  let newNum = onlik * 100 + yuzlik * 10 + birlik;
  console.log(newNum);  
}

{
  let a = 555;

  let yuzlik = Math.floor(a/100);
  let onlik = Math.floor((a % 100) / 10);
  let birlik = a % 10;
  
  let newNum = onlik * 100 + yuzlik * 10 + birlik;
  console.log(newNum);  
}
