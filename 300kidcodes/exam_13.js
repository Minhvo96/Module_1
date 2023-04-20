// Tính S(n) = x^2 + x^4 + … + x^2n

let n = 2;
let s = 0;
let x = 8;

for (i = 1; i <= n; i++) {
    s += x**(2*i);
}
console.log(s);