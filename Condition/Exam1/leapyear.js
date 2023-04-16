let year = +prompt('Input year in here')

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + ' is a leap year');
        }
        else {
            alert(year + ' is not a leap year');
        }
    } else {
        alert(year + ' is a leap year');
    }
} else {
    alert(year + ' is not a leap year');
}

/*
if (year % 4 == 0 && year % 100 != 0) {
    alert ('This is a leap year');
} else if (year % 100 == 0 && year % 400 != 0) {
    alert ('This is not a leap year');
} else if (year % 100 == 0 && year % 400 == 0) {
    alert ('This is a leap year');
} else {
    alert ('This is not a leap year');
}
*/