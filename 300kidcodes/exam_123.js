// Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số nguyên

let array = [70, -3, -1, 1, 3, -5, 5, 80, 10, 20];
let min = array[0];
let index = 0;

for (i = 1; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
        index = i;
    }
} console.log('Min is ' + min + ' in the position ' + '[' + index + ']');