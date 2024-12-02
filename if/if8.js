/*
a, b, c ​kesmalar berilgan. Uchburchak yasash mumkinligiga tekshiring.
Agar mumkin bolsa ​“Yes”​ aks holda ​“No”​ javob qaytarsin.

Uchburchak yasash sharti:​ Ixtiyoriy 2 ta tomonning yig`indisi qolgan 3-tomondan
katta bo`lishi kerak
*/

{
  let a = 3, b = 4, c = 5;

  if (a+b > c && a+c > b && b+c > a) {
    console.log(`Uchburchak yasash mumkin`);
  } else {
    console.log(`Uchburchak yasash mumkin emas`);
  }
}

{
  let a = 7, b = 4, c = 2;

  if (a+b > c && a+c > b && b+c > a) {
    console.log(`Uchburchak yasash mumkin`);
  } else {
    console.log(`Uchburchak yasash mumkin emas`);
  }
}