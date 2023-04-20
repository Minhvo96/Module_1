// Tính S(n) = 1 + 1/(1 + 2) + 1/(1 + 2 + 3) + ….. + 1/(1 + 2 + 3 + …. + N)

let n = 3;
let s = 0;
let factorial = 0; //khởi tạo biến tính giai thừa

for (i = 1; i <= n; i++) {
   factorial += i;
   s += 1/factorial;
}
console.log(s);
