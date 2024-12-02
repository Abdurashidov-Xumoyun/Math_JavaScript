/*
a,​ butun son berilgan. Ushbu sonni quyidagi shartlarga tekshiring: “​Ikki xonali toq son​”
“​Ikki honali juft son​”
“​Uch xonali toq son​”
“​Uch xonali juft son​”
*/

// 1 - Javob: Ikki xonali juft son
// 2 - Javob: Uch xonali toq son

{
  let a = 30;

  if (a > 0 && a <= 99 && a%2 == 1) {
    console.log("Ikki xonali toq son")
  } else if (a > 0 && a <= 99 && a%2 == 0) {
    console.log("Ikki xonali juft son")
  } else if (a > 0 && a <= 999 && a%2 == 1) {
    console.log("Uch xonali toq son")
  } else {
    console.log("Uch xonali juf son")
  } 
}

{
  let a = 101;

  if (a > 0 && a <= 99 && a%2 == 1) {
    console.log("Ikki xonali toq son")
  } else if (a > 0 && a <= 99 && a%2 == 0) {
    console.log("Ikki xonali juft son")
  } else if (a > 0 && a <= 999 && a%2 == 1) {
    console.log("Uch xonali toq son")
  } else {
    console.log("Uch xonali juf son")
  } 
}