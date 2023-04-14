let salary = +prompt('Input Your Salary');
let personalincome;

if (0 >= salary) {
    alert('Error');
}
else if (0 <= salary && salary <= 5000000) {
    personalincome = salary * 0.05;
        alert('Your Personal Income is: ' + personalincome + ' VNĐ');
}
else if (5000000 <= salary && salary <= 10000000) {
    personalincome = 250000 + salary * 0.1;
        alert('Your Personal Income is: ' + personalincome + ' VNĐ');
}
else if (10000000 <= salary && salary <= 18000000) {
    personalincome = 750000 + salary * 0.15;
        alert('Your Personal Income is: ' + personalincome + ' VNĐ');
}
else if (18000000 <= salary && salary <= 32000000) {
    personalincome = 1950000 + salary * 0.2;
        alert('Your Personal Income is: ' + personalincome + ' VNĐ');
}
else if (32000000 <= salary && salary <= 52000000) {
    personalincome = 4750000 + salary * 0.25;
        alert('Your Personal Income is: ' + personalincome + ' VNĐ');
}
else if (52000000 <= salary && salary <= 80000000) {
    personalincome = 9750000 + salary * 0.3;
        alert('Your Personal Income is: ' + personalincome + ' VNĐ');
}
else {
    personalincome = 18150000 + salary * 0.35;
    alert('Your Personal Income is: ' + personalincome + ' VNĐ');
}

