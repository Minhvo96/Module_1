// Viết hàm đếm số lượng số nguyên tố nhỏ hơn 100 trong mảng

let array = [70, -3, -1, 1, 3, -5, 5, 80, 7, 10, 20, 2006, 2010, 3000];
let count = 0;

for (let i = 0; i < array.length; i++) {
  let isPrime = true;
  if (array[i] > 1 && array[i] < 100) {
    for (let j = 2; j <= Math.sqrt(array[i]); j++) {
      if (array[i] % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count++;
    }
  }
}

console.log(`The number of primes smaller than 100 in the array is ${count}`);