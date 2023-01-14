function rot13(str) {
    const rot13Convertor = function (l) {
        let charCode = l.charCodeAt(0);
        if (charCode + 13 >= (26 + 65)) {
            charCode = charCode + 13 - 26;
        } else charCode += 13;
        return String.fromCharCode(charCode);
    };
    str = str.replace(/\w/g, l => rot13Convertor(l))
    console.log(str);
    return str;
}

rot13("SERR PBQR PNZC");