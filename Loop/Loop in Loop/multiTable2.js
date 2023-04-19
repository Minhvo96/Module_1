let table = "<table border '1' width ='900px' cellpadding ='10' cellspacing = '0'>";
let i;
let j;

for(i= 1; i <= 10; i++) {
    table += '<tr>';
    for (j = 1; j <= 10; j++) {
        table += '<td>' + i + '*' + j + ' = ' + i*j + '</td>';
    }
    table += '</tr>';
}table += '</table>';
document.write(table);