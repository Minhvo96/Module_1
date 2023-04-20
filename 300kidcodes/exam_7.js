// Tính S(n) = ½ + 2/3 + ¾ + …. + n / n + 1

let n = 3;
let s = 0;

for (i = 1; i <= n; i++) {
    s += i/(i+1);
}
console.log(s);