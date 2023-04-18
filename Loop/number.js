let countDivisors = 0;

for (number = 10; number <= 50; number++) {
    for (divisor = 1; divisor <= number; divisor++) {
        if (number % divisor == 0) {
            countDivisors += 1;
        }
    } if (countDivisors == 2) {
        console.log(number);
    } countDivisors = 0;
}


/*
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let i = 1;
do {
    console.log(i);
    i += 1;
} while (i <= 10); */