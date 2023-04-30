// Viết hàm kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không

let array = [70, -3, -1, 1, 3, -5, 5, 80, 10, 20, 2006, 2010, 3000];
let number = [];

for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && array[i] < 2004) {
        number.push(array[i]);

    }
} console.log('Integer numbers is ' + number);