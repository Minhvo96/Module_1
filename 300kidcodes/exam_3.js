// Tính S(n) = 1 + 1/2 + 1/3 + … + 1/n

// let n = 10;
// let s = 0;

// for (i = 1; i <= n; i++) {
//     s += 1/i;
// }
// console.log(s); 


// let n = 10;
// let s = 0;
// let i = 1;

// while (i <= n) {
//     s += 1/i;
//     i++;
// }
// console.log(s); 


let n = 10;
let s = 0;
let i = 1;

do {
    s += 1/i;
    i++;
} while (i <= n);
console.log(s); 
