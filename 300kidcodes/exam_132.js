// Viết hàm liệt kê các giá trị chẵn trong mảng 1 chiều các số nguyên

let array = [70, -3, -1, 1, 3, 15, 5, 80, 10, 20, -2006, 2010, -3000];
let total = [];

for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        total.push(array[i]);
    }
} console.log('Even numbers are ' + total);