// Tính S(n) = x + x^2 + x^3 + … + x^n

let n = 3;
let s = 0;
let x = 4;

for (i= 1; i <= n; i++) {
    s += x**i;
}
console.log(s);