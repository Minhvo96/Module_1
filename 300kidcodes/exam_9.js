// Tính T(n) = 1 x 2 x 3…x N

let n = 3;
let t = 1;

for (i = 1; i <= n; i++) {
    t *= i;
}
console.log(t);