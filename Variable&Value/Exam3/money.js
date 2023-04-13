function convert() {
    let amount = document.getElementById('amount').value;
    let fromM = document.getElementById('from').value;
    let toM = document.getElementById('to').value;
    let result;

    if (fromM == 'VND' && toM == 'USD') {
        result = amount * 23000 + ' USD';
    } else if (fromM == 'USD' && toM == 'VND') {
        result = amount / 23000 + ' VND';
    } else if (fromM == 'VND') {
        result = amount + 'VND';
    } else {
        result = amount + 'USD';
    }

    document.getElementById('result').innerHTML = result;
}
