let number = +prompt('Input number here');

/*if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}*/


switch (number) {
    case (1):
        alert(1);
        break;
    case (-1):
        alert(-1);
        break;
    case (0):
        alert(0);
        break;
    default:
        alert('Number is not existance');
}