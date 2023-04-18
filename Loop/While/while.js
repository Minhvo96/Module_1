let number = prompt('Input number: ');
let total = 0;

while( number != -1 ) {
    number = prompt("Enter a number: ");
    alert(number);
    total += +number;
    alert(total);
}