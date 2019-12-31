function isLeapYear(millisecond) {
    let date = new Date(millisecond).getFullYear();
    if (isNaN(date)) {
        return 'Invalid Date';
    } else {
        if (((date % 4 === 0) && (date % 100 !== 0)) || (date % 400 === 0)) {
            return date + ' is a leap year';
        } else {
            return date + ' is not a leap year';
        }
    }
}
console.log(isLeapYear(1213131313)); // => ‘1970 is not a leap year’  
console.log(isLeapYear(1213131313135465656654564646542132132131)); // => ‘Invalid Date’
console.log(isLeapYear('2020-01-01 00:00:00')); // => ‘2020 is a leap year’
console.log(isLeapYear('2020-01-01 00:00:00777')); // =>  ‘Invalid Date’
console.log(isLeapYear('2021-01-15 13:00:00')); // => ‘2021 is not a leap year’
console.log(isLeapYear('2200-01-15 13:00:00')); // => ‘2020 is not a leap year’

