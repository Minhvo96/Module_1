let numbers = [-3, 5, 1, 3, 2, 10];
let x = 10;

for (i = 0; i < numbers.length; i++) {
    if (x == numbers[i]) {
        console.log(x + ' in the index');
        break;
    }
    else {
        console.log(x + ' not found');
    }
}

// let value = 10;
// let numbers = [-3, 5, 1, 3, 2, 10];
// let index = -1;
// for (let i = 0; i < numbers.length; i++) {
//     if (value == numbers[i]) {
//         index = i;
//     }
// }
// if (index > -1) {
//     console.log(value + " found at " + '[' + index + ']');
// }
// else {
//     console.log(value + " not found ");
// }