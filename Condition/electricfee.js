let kWh = +prompt('Input Electric Fee (kWh)');
let ElectricFee;

if (0 > kWh) {
    alert('Your electric fee is not exist');
} else if (0 <= kWh && kWh <= 50) {
    ElectricFee = kWh * 1678;
    alert('Bậc thang 1.' + ' Your electric fee is: ' + ElectricFee + ' VNĐ');
} else if (51 <= kWh && kWh <= 100) {
    ElectricFee = (50 * 1678)+((kWh - 50)*1734);
    alert('Bậc thang 2.' + ' Your electric fee is: ' + ElectricFee + ' VNĐ');
} else if (101 <= kWh && kWh <= 200) {
    ElectricFee = (50 * 1678)+(50*1734)+((kWh-100)*2014);
    alert('Bậc thang 3.' + ' Your electric fee is: ' + ElectricFee + ' VNĐ');
} else if (201 <= kWh && kWh <= 300) {
    ElectricFee = (50 * 1678)+(50*1734)+(100*2014)+((kWh-200)+2536);
    alert('Bậc thang 4.' + ' Your electric fee is: ' + ElectricFee + ' VNĐ');
} else if (301 <= kWh && kWh <= 400) {
    ElectricFee = (50 * 1678)+(50*1734)+(100*2014)+(100*2536)+((kWh-300)*2834);
    alert('Bậc thang 5.' + ' Your electric fee is: ' + ElectricFee + ' VNĐ');
} else {
    ElectricFee = (50 * 1678)+(50*1734)+(100*2014)+(100*2536)+(100*2834)+((kWh-400)*2927);
    alert('Bậc thang 6.' + ' Your electric fee is: ' + ElectricFee + ' VNĐ');
}
