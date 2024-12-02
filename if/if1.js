/* 
a,b,c​ butun sonlar berilgan, shu sonlarning qaysi biri kichikligini aniqlang.
*/

// 1 - Javob: 1
// 2 - Javob: -9

{
  let a = 5, b = 8, c = 1;

  if (a < b && a < c) {
    console.log(a)
  } else if (b < a && b < c) {
   console.log(b)
  } else {
   console.log(c)
  }
}

{
  let a = 4, b = -9, c = 23;

  if (a < b && a < c) {
    console.log(a)
  } else if (b < a && b < c) {
   console.log(b)
  } else {
   console.log(c)
  }
}