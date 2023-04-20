// Tính S(n) = 1/1×2 + 1/2×3 +…+ 1/n x (n + 1)

let n = 5;
let s = 0;

for (i = 1; i <= n; i++) {
    s += 1/((i)*(i+1));
}
console.log(s);