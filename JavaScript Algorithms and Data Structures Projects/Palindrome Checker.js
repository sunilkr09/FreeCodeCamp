function palindrome(str) {
    let newString = str.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    for (let i = 0; i <= newString.length / 2; i++) {
        if (newString.charAt(i) !== newString.charAt(newString.length - 1 - i))
            return false;
    }
    return true;
}

console.log(palindrome("eye"));