// Tested different ways to get modules to work with both browser and Jest, changed test environment to experimental to get import/export to work
export function upperCaseConv(text) {
    // If it is not a string that is being input, throw Error
    if(typeof text !== 'string'){
        throw new Error('Input is not a string!');
    }
    // Otherwise return string converted to upper case
    return text.toUpperCase();
}

// module.exports = {
//     upperCaseConv
// }
