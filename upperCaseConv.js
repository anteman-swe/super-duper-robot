function upperCaseConv(text) {
    // If it is not a string that is being input, throw Error
    if(typeof text !== 'string'){
        throw new Error('Input is not a string!');
    }
    // Otherwise return string converted to upper case
    return text.toUpperCase();
}

module.exports = {
    upperCaseConv
}
