// Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3.n

let n = 5;
let s = 0;
let factorial = 1; //khởi tạo biến tính giai thừa

for (i = 1; i <= n; i++) {
   factorial = factorial * i;
   s = s + factorial;
}
console.log(s);