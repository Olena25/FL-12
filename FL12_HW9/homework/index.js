let zero = 0;
let one = 1;
let two = 2;
let three = 3;
let five = 5;
let seven = 7;
let eight = 8;
let ten = 10;
let fourteen = 14;
let twentyNine = 29;
let thirty = 30;
let thirtyOne = 31;
let fortyEight = 48;
let fiftyEight = 58;
let threeHundredSixtyFive = 365;
let twentyNineteen = 2019;
function convert() {
    let arrayConvertedValues = [];
    let convertedValue = 0;
    for (let i = 0; i < arguments.length; i++) {
        let argumentValue = arguments[i];
        if (typeof argumentValue === 'number') {
            convertedValue = '' + argumentValue;
            arrayConvertedValues.push(convertedValue);
        } else {
            convertedValue = parseInt(argumentValue);
            arrayConvertedValues.push(convertedValue);
        }
    }
    return arrayConvertedValues;
}
console.log(convert('1', two, three, '4'));
function executeforEach(array, callbackFunction) {
    for (let i = 0; i < array.length; i++) {
        let elementArray = array[i];
        callbackFunction(elementArray);
    }
}
executeforEach([one, two, three], function (element) {
    console.log(element * two);
})
function mapArray(array, callbackFunction) {
    let arrayNumbers = [];
    let arrayNumbersElement = 0;
    for (let i = 0; i < array.length; i++) {
        let elementArray = array[i];
        if (typeof elementArray === 'string') {
            if (parseInt(elementArray)) {
                arrayNumbersElement = parseInt(elementArray);
                arrayNumbers.push(callbackFunction(arrayNumbersElement));
            }
        } else {
            arrayNumbers.push(callbackFunction(elementArray));
        }
    }
    return arrayNumbers;
}
console.log(mapArray([two, '5', eight], function (element) {
    return element + three;
}));
function filterArray(array, callbackFunction) {
    let arrayPairNumbers = [];
    for (let i = 0; i < array.length; i++) {
        let elementArray = array[i];
        if (callbackFunction(elementArray)) {
            arrayPairNumbers.push(elementArray);
        }
    }
    return arrayPairNumbers;
}
console.log(filterArray([two, five, eight], function (element) {
    return element % two === 0;
}));
function flipOver(string) {
    let reverseString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString = reverseString + string[i]; // or reverseString += string[i];
    }
    return reverseString;
}
console.log(flipOver('hey world'));
function makeListFromRange(arrayRange) {
    let arrayNumbers = [];
    let minValue = 0;
    let maxValue = 0;
    for (let i = 0; i < arrayRange.length; i++) {
        minValue = arrayRange[i];
        maxValue = arrayRange[++i];
    }
    for (let j = minValue; j <= maxValue; j++) {
        arrayNumbers.push(j);
    }
    return arrayNumbers;
}
console.log(makeListFromRange([two, seven]));
const actors = [{
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];

function getArrayOfKeys(actors, key) {
    let objectOfActors = {};
    let arrayOfValuesSelectedByKey = [];
    for (let i = 0; i < actors.length; i++) {
        objectOfActors = actors[i];
        arrayOfValuesSelectedByKey.push(objectOfActors[key]);
    }
    return arrayOfValuesSelectedByKey;
}
console.log(getArrayOfKeys(actors, 'name')); // [‘tommy’, ‘lee’]
function substitute(array) {
    let arrayWithReplace = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < thirty) {
            arrayWithReplace.push('*')
        } else {
            arrayWithReplace.push(array[i]);
        }
    }
    return arrayWithReplace;
}
console.log(substitute([fiftyEight, fourteen, fortyEight, two, thirtyOne, twentyNine]));
const data = new Date(twentyNineteen, zero, two);
function getPastDay(data, amountDaysAgo) {
    let newdata = new Date();
    newdata.setDate(data.getDate() - amountDaysAgo);
    let day = newdata.getDate();
    return day;
}
console.log(getPastDay(data, one)); // 1, (1 Jan 2019)
console.log(getPastDay(data, two)); // 31, (31 Dec 2018)
console.log(getPastDay(data, threeHundredSixtyFive)); // 2, (2 Jan 2018)
function formatDate(data) {
    let year = data.getFullYear();
    let day = data.getDate();
    let month = data.getMonth() + 1;
    if (day < ten){
        day = '0' + day;
    }
    if (month < ten){
        month = '0' + month;
    }
    let currentData = year + '/' + month + '/' + day;
    let hours = data.getHours()
    let minutes = data.getMinutes()
    if (hours < ten){
        hours = '0' + hours;
    }
    if (minutes < ten){
        minutes = '0' + minutes;
    }
    let currentDataAndTime = currentData + ' ' + hours + ':' + minutes; 
    return currentDataAndTime; 
}
console.log(formatDate(new Date('6/15/2018 09:15:00')))


