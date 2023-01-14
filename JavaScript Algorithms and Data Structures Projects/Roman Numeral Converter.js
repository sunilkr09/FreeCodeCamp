function convertToRoman(num) {
    const romanNumbers = {
        "1000": "M",
        "900": "CM",
        "500": "D",
        "400": "CD",
        "100": "C",
        "90": "XC",
        "50": "L",
        "40": "XL",
        "10": "X",
        "9": "IX",
        "5": "V",
        "4": "IV",
        "1": "I"
    };
    let equivalentRomanNumber = "";
    const numberKeys = Object.keys(romanNumbers).map(k => Number.parseInt(k))

    while (num > 0) {
        let n = numberKeys.filter(n => n <= num)
        n = n[n.length - 1];
        equivalentRomanNumber = equivalentRomanNumber + romanNumbers[n];
        num -= n;
    }

    return equivalentRomanNumber;
}

console.log(convertToRoman(36));