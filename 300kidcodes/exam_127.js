// Viết hàm sắp xếp mảng 1 chiều các số thực tăng dần

let array = [70, -3, -1, 1, 3, -5, 5, 80, 10, 20, 2006, 2010, 3000];

function compare (n1,n2) {
    return n1 - n2;
}
console.log(array.sort(compare));
