// Tính S(n) = ½ + ¼ + … + 1/2n

// let n = 5;
// let s = 0;

// for (i = 1; i <= n; i++) {
//     s += 1/(2*i);
// }
// console.log(s);


// let n = 5;
// let s = 0;
// let i = 1;

// while (i <= n) {
//     s += 1 / (2 * i);
//     i++;
// }
// console.log(s);


let n = 5;
let s = 0;
let i = 1;

do {
    s += 1 / (2 * i);
    i++;
} while (i <= n);
console.log(s);