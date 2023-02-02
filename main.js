//! *dan cercive
// let a = "";
// for (let i = 0; i < 5; i++) {
//   for (let k = 0; k < 4; k++) {
//     if (i == 0 || i == 4 || k == 0 || k == 3) {
//       a += "* ";
//     } else {
//       a += "  ";
//     }
//   }
//   a += "\n";
// }
// console.log(a);

//! sade bolenler
// let a = +prompt("enter a number");
// for (let i = 0; i <= a; i++) {
//   let counter = 0;
//   if (a % i == 0) {
//     for (let b = 1; b <= i; b++) {
//       if (i % b == 0) {
//         counter++;
//       }
//     }
//   }
//   if (counter == 2) console.log(`${i}`);
// }

//! 3 reqemli sag sol 3
// let a = +prompt("enter three digits number");
// console.log(`3${a}3`);

//! ededin boyuk reqemi
// let a = prompt("enter a number").split("").sort(function (a, b) { return a - b; }).at(-1);
// console.log(`${a}`);

//! ededin cut reqemleri
// let a = prompt("enter a number").split("").sort(function (a, b) { return a - b; });
// for (let i = 0; i <= a.length; i++) {
//     if(a[i]%2==0) console.log(`${a[i]}`);
// }

//! ededin sade reqemleri
// let a = prompt("enter a number");
// for (let i = 0; i < a.length; i++) {
//   let counter = 0;
//   for (let k = 1; k <= a[i]; k++) {
//     if (a[i] % k === 0) counter++;
//   }
//   if (counter == 2) console.log(`${a[i]}`);
// }

//! mukemmel eded
// let a = prompt("enter a number");
// let sum = 0;
// for (let i = 0; i < a; i++) {
//   if (a % i == 0) {
//     sum += i;
//   }
// }
// if (sum == a) {
//   console.log(`${a} is a perfect number`);
// } else {
//   console.log(`${a} isn't a perfect number`);
// }

//! ededin reqemlerinin sayi ve tersi
// let a = prompt("enter a number");
// console.log(`eded ${a.length} reqemlidir, ededin tersi ${a.split("").reverse().join("")}`);

//! 1ci eded ^ 2ci eded
// let a = prompt("enter first number");
// let b = prompt("enter second number");
// console.log(`${a ** b}`);

//! ededin reqemlerinin kvadratlari cemi
// let a = prompt("enter a number").split("");
// let sqrsum = 0;
// for (let i = 0; i < a.length; i++) {
//   let b = a[i] ** 2;
//   sqrsum += b;
// }
// console.log(`${sqrsum}`);

//! daxil olunan edeleri yan yana yaz
// let a = prompt("enter a number");
// let b = prompt("enter a number");
// let c = prompt("enter a number");
// console.log(`${a}, ${b}, ${c}`);

//! daxil olunan ededleri sirala
//* metodsuz :
// let a = prompt("enter a number");
// let b = prompt("enter a number");
// let c = prompt("enter a number");
// if (a > b && a > c) {
//   if (b > c) {
//     console.log(`${c},${b},${a}`);
//   } else {
//     console.log(`${b},${c},${a}`);
//   }
// } else if (b > a && b > c) {
//   if (a > c) {
//     console.log(`${c},${a},${b}`);
//   } else {
//     console.log(`${a},${c},${b}`);
//   }
// } else if (c > a && c > b) {
//   if (a > b) {
//     console.log(`${b},${a},${c}`);
//   } else {
//     console.log(`${a},${b},${c}`);
//   }
// } else {
//   console.log("enter three different numbers");
// }

//* metodla :
// let a = prompt("enter three numbers with spaces");
// console.log(a.split(" ").sort(function (a, b) { return a - b}).join(","));

//! nece tam eded
// let a = prompt("how many number will you enter?");
// let b = [];
// let counter = 0;
// for (let i = 0; i < a; i++) {
//   b[i] = prompt(`enter number ${i + 1}`);
//   if (b[i] % 1 == 0) {
//     console.log(`${b[i]}`);
//     counter++;
//   }
// }
// console.log(`there is ${counter} integer`);

//! sqrt
//* metodsuz:
// let a = prompt("enter a number");
// console.log(`${a ** 0.5}`);

// //* metodla:
// let a = prompt("enter a number");
// console.log(Math.sqrt(a));

//! find middle
// let b = [];
// for (let i = 0; i < 3; i++) {
//   b[i] = prompt(`enter number ${i + 1}`);
//   b.sort(function (a, b) { return a - b});
// }
// console.log(`${b[1]}`);

//! count of numbers that end with nine
// let a = prompt("how many number will you enter?");
// let b = [];
// let counter = 0;
// for (let i = 0; i < a; i++) {
//   b[i] = prompt(`enter number ${i + 1}`);
//   if (b[i] % 10 === 9) {
//     counter++;
//   }
// }
// console.log(`count of numbers that end with nine - ${counter}`);

//! count of even numbers
// let a = prompt("how many number will you enter?");
// let b = [];
// let counter = 0;
// for (let i = 0; i < a; i++) {
//   b[i] = prompt(`enter number ${i + 1}`);
//   if (b[i] % 2 === 0) {
//     counter++;
//   }
// }
// console.log(`count of even numbers - ${counter}`);

//! count of odd numbers
// let a = prompt("how many number will you enter?");
// let b = [];
// let counter = 0;
// for (let i = 0; i < a; i++) {
//   b[i] = prompt(`enter number ${i + 1}`);
//   if (b[i] % 2 !== 0) {
//     counter++;
//   }
// }
// console.log(`count of odd numbers - ${counter}`);

//! sum of array's elements (while)
let a = prompt("enter numbers with space").split(" ");
let b = a;
let counter = 0;
let sum = 0;
let i = 0;
while (counter < b.length) {
  if (b[i] % 1 == 0) {
    sum += +b[i];
  }
  counter++;
  i++;
}
console.log(`${sum}`);
