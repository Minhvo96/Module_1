let array = [];
let x = 0;

function add_element_to_array() {
    array[x] = document.getElementById('number').value;
    //alert('Element ' + array[x] + ' added at index ' + '[' + x + ']');
    alert(`Element ${array[x]} added at index [${x}]`);
    x++;
    document.getElementById('number').value = "";
}

function display_element_to_array() {
    let e = " ";
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById('result').innerHTML = e;
}