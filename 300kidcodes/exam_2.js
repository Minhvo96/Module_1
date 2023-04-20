// Tính S(n) = 1^2 + 2^2 + … + n^2

// let n = 10;
// let s = 0;

// for (i = 1; i <= n; i++) {
//     s += i ** 2;
// }
// console.log(s);


// let n = 10;
// let s = 0;
// let i = 1;

// while (i <= n) {
//     s += i ** 2;
//     i++;
// }
// console.log(s);


let n = 10;
let s = 0;
let i = 1;

do {
    s += i ** 2
    i++;
} while (i <= n);
console.log(s);