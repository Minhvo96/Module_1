let login = prompt('Input username');

if (login == 'Admin') {
    let password = prompt('Input password');
    if (password = 'TheMaster') {
        alert('Welcome');
        } else if (password = 'Null') {
            alert('Canceled');
        } else {
            alert('Wrong password');
        }
} else if (login == 'Null') {
    alert('Canceled');
} else {
    alert('I dont know you');
}

