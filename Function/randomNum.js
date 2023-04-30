
function printRandomNumbersFromOnetoTen() {
    let array = new Array(10);
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 11);
    }
    console.log(array);
}
printRandomNumbersFromOnetoTen()