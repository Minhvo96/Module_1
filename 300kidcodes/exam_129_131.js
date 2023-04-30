// Bài 129 + 131: Viết hàm nhập, xuất mảng 1 chiều các số nguyên


let number = parseInt(prompt('Input index'));
let array = new Array(number);

for (i = 0; i < array.length; i++) {
    array[i] = +prompt('Enter value');
} console.log(number);