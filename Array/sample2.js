let array = [];
let x = 0;

function add_element_to_index() {
    array[x] = document.getElementById('text').value
    alert(`Element ${array[x]} added at index [${x}]`);
    x++;
    document.getElementById('text').value = " ";
}

function display_element_from_index() {
    let e = "<hr/>";
    for(i = 0; i < array.length; i++) {
        e += 'Element ' + i + ' = ' + array[i] + '<br>';
    }
    document.getElementById('result').innerHTML = e;
}