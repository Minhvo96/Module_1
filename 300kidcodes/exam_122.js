// Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực

let array = [-3, -1, 1, 3.1, 5.6, 80, 10, 20];
let max = array[0];
let index = 0;

for (i = 1; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
        index = i;
    } 
} console.log('Max is ' + max + ' in the position ' + '[' + index + ']');