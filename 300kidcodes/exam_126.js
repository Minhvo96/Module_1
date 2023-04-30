// Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực

let array = [70, -3, -1, 1, 3, -5, 5, 80, 10, 20, 2006, 2010, 3000];
let total = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        total += array[i];
    }
} console.log('Total negative numbers is ' + total);