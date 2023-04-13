inputPhysics = prompt('Input Physics');
inputChemistry = prompt('Input Chemistry');
inputBiology = prompt('Input Biology');

let Physics = parseInt(inputPhysics);
let Chemistry = parseInt(inputChemistry);
let Biology = parseInt(inputBiology);
let average = (Physics+Chemistry+Biology)/3;
alert('Average is: '+average);