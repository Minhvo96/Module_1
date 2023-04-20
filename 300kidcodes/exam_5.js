// Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)

let n = 5;
let s = 0;

for (i = 1; i <= n; i++) {
    s += 1/(2*i+1);
}
console.log(s);