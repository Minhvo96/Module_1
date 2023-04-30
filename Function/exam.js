// Tạo hàm: tạo mảng và hiển thị mảng đó, mỗi giá trị trên 1 dòng, tìm số lớn nhất trong mảng đó

function create(size, min, max) {
    let array = new Array(size);
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(array[i]);
    }
    return array;
} let array_1 = create(10, 20, 50);
let maxNumber = Math.max.apply(null, array_1);
console.log("Số lớn nhất trong mảng là: " + maxNumber);