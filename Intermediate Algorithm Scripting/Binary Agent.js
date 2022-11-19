// My Solution
function binaryAgent(str) {
    let binChar = str.split(' ');
    return binChar.map(e => binaryToChar(e))
        .join('');
}

function binaryToChar(b) {
    let binary = b.split('');
    let ascii = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            ascii = ascii + Math.pow(2, binary.length - i - 1);
        }
    }
    return String.fromCharCode(ascii);
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Best solution found
let binaryAgent = str => str.replace(/\d+./g, char => String.fromCharCode(`0b${char}`));