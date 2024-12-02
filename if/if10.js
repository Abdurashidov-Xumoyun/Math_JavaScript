// a,​ butun son berilgan. Ushbu sonni quyidagi shartlarga tekshiring:
/*
“​musbat toq son​”
“​musbat juft son​”
“​manfiy toq son​”
“​manfiy juft son​”, “​son 0 ga teng​”.
*/

// 1 - Javob: Musbat juft son
// 2 - Javob: Manfiy toq son
// 3 - Javob: Son 0 gateng

{
  let a = 10;

  if (a > 0 && a%2 == 1) {
    console.log("Musbat toq son");
  } else if (a > 0 && a%2 == 0) {
    console.log("Musbat juft son");
  } else if (a < 0) {
    let b = a * -1
    if (b % 2 == 1) {
      console.log("Manfiy toq son");
    } else {
      console.log("Manfiy juft son");
    }
  } else {
    console.log("Son 0 ga teng")
  }
}

{
  let a = -7;

  if (a > 0 && a%2 == 1) {
    console.log("Musbat toq son");
  } else if (a > 0 && a%2 == 0) {
    console.log("Musbat juft son");
  } else if (a < 0) {
    let b = a * -1
    if (b % 2 == 1) {
      console.log("Manfiy toq son");
    } else {
      console.log("Manfiy juft son");
    }
  } else {
    console.log("Son 0 ga teng")
  }
}

{
  let a = 11;

  if (a > 0 && a%2 == 1) {
    console.log("Musbat toq son");
  } else if (a > 0 && a%2 == 0) {
    console.log("Musbat juft son");
  } else if (a < 0) {
    let b = a * -1
    if (b % 2 == 1) {
      console.log("Manfiy toq son");
    } else {
      console.log("Manfiy juft son");
    }
  } else {
    console.log("Son 0 ga teng")
  }
}
