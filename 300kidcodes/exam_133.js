// Viết hàm liệt kê các vị trí mà giá trị tại đó là giá trị âm trong mảng 1 chiều các số thực

let array = [70, -3, -1, 1, 3, 15, 5, 80, 10, 20, -2006, 2010, -3000];
let negativePositions = [];

for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativePositions.push(i);
    }
} console.log('Negative numbers are in the positions ' + '[' + negativePositions + ']');
