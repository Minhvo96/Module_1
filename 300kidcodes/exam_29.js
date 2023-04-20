// Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25

let number = 100;
let divisor;

for (i = 2; i <= number; i++) {
    if (number % i == 0 && number % 2 !== 0) {
        divisor = i;
    }
}