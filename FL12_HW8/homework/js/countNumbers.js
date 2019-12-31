function countNumbers(string) {
    let stringNumber = '';
    for (var i = 0; i < string.length; i++) {
        let char = string[i];
        if (parseInt(char)) {
            stringNumber = stringNumber + char;
        }
    }
    let countsOfEachNumbers = {};
    for (var j = 0; j < stringNumber.length; j++) {
        if (typeof countsOfEachNumbers[stringNumber.charAt(j)] === 'undefined') {
            countsOfEachNumbers[stringNumber.charAt(j)] = 1;
        } else {
            countsOfEachNumbers[stringNumber.charAt(j)] = countsOfEachNumbers[stringNumber.charAt(j)] + 1;
        }
    }
    return countsOfEachNumbers;

}

console.log(countNumbers('erer384jj4444666888jfd123'));