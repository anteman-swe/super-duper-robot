// Tested different ways to get modules to work with both browser and Jest, changed test environment to experimental to get import/export to work
import { upperCaseConv } from './upperCaseConv.js';
// const { upperCaseConv } = require('./upperCaseConv.js');
// require('./upperCaseConv.js');

const inputField = document.getElementById('inputField');
const inputButton = document.getElementById('inputButton');
const outputField = document.getElementById('outputField');

if (inputButton) {
    inputButton.addEventListener('click', function(){
        const outputCaps = upperCaseConv(inputField.value);
        outputField.textContent = outputCaps;
    })
}

if (outputField) {
    outputField.addEventListener('click', function () {
        inputField.value = "";
        outputField.textContent = "";
    })
}