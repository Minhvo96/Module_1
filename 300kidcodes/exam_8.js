// Tính S(n) = ½ + ¾ + 5/6 + … + 2n + 1/ 2n + 2

let n = 3;
let s = 0;

for (i = 0; i < n; i++) {
    s += ((2*i)+1)/((2*i)+2);
}
console.log(s);