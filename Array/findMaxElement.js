let numbers = [-3, 5, 1, 3, 2, 10];
let max = numbers[0];
let index = 0;

for (i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
        index = i;
    } 
} console.log('Max number is ' + max + ' at position' + '[' + index + ']');

















// let numbers = [-3, 5, 1, 3, 2, 10, 1500, 8];
// let max = numbers[0];
// let index = 0;
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//         index = i;
//     }
// }
// console.log("max: " + max + " at position " + index);