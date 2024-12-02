/*
n​ ikki xonali son berilgan uning raqamlar joyini almashtirganda hosil bo`lgan son ​n ​sonidan​ ​kichik yoki teng bo`lsa T​ rue​ aks holda ​False qaytaradigan dastur tuzing.
*/

// 1 - Javob: false
// 2 - Javob: true
// 3 - Javob: true

{
  let num = 27;

  let result = num.toString().split('').reverse().join('');

  if (result > num) {
    console.log(false);
  } else {
    console.log(true);
  }
}

{
  let num = 99;

  let result = num.toString().split('').reverse(). join('');

  if (result > num) {
    console.log(false);
  } else {
    console.log(true);
  }
}

{
  let num = 43;

  let result = num.toString().split('').reverse(). join('');

  if (result > num) {
    console.log(false);
  } else {
    console.log(true);
  }
}