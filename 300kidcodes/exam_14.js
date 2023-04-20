// Tính S(n) = x + x^3 + x^5 + … + x^2n + 1

let n = 3;
let s = 0;

for(i = 0; i <= n; i++) {
    s += n**(2*i+1);
}
console.log(s);